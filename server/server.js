require('dotenv').config()

const express = require('express');
const app = express()
const port = 4000
const cors = require("cors");

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const pool = require("./db")

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.post('/users', async (req, res) => {

    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {name: req.body.name, password: hashedPassword}

        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_password) VALUES ($1, $2)", [user.name, user.password]
        )
        console.log("Inside register")
        
        res.status(201).send()
    } catch{
        res.status(500).send()
    }


    
})

app.get('/fav', authenticateToken, async (req, res) => {

    const userIdQuery = await pool.query(
        "SELECT user_id FROM users WHERE user_name=$1", [req.user.name]
    )
    
    console.log(userIdQuery.rows[0].user_id, "USERID ROWS")

    userId = userIdQuery.rows[0].user_id

    const gameIdQuery = await pool.query(
        "SELECT game_id FROM user_favourite_games WHERE user_id=$1", [userId]
    )

    gameIds = gameIdQuery.rows
    
    gameIdSQLArray = []
    gameIdSQLString = "("

    for(let i = 0; i < gameIds.length; i++){
        gameIdSQLArray.push(gameIds[i].game_id)
        k = i + 1
        gameIdSQLString += "$"
        gameIdSQLString += k
        if(i != gameIds.length - 1){
            gameIdSQLString += ", "
        }
        
    }

    gameIdSQLString += ")"

    gamesData = []

    console.log(gameIdSQLArray, "gameIDSQLArray")
    console.log(gameIdSQLString, "gameIDSQLString")
    try {
        const gamesQuery = await pool.query(
            "SELECT game_data FROM favourite_games WHERE game_id IN " + gameIdSQLString, gameIdSQLArray
        )


        for(let i = 0; i < gamesQuery.rows.length; i++){
            gamesData.push(gamesQuery.rows[i].game_data)
        }

    
        res.json(gamesData)

    } catch (error) {
        console.log("error" + error)
    }
    
    
    

})

app.post('/fav', authenticateToken, async (req, res) => {



    game = req.body;
    
    game["userNameGameDB"] = req.user.name;

    gameId = game.id
    console.log(req.user.name, "posting to fav - game")
    try{
        const newGame = await pool.query(
            "INSERT INTO favourite_games (game_id, game_data) VALUES ($1, $2)", [gameId, game]
        )


    }
    catch(err){
        console.log("[Error] Adding a new game")
    }
    

    const userId = await pool.query(
        "SELECT user_id FROM users WHERE user_name=$1", [req.user.name]
    )
    
    console.log(userId.rows[0].user_id, "userID rows")
    console.log(gameId, "userID rows")

    const newFavGame = await pool.query(
        "INSERT INTO user_favourite_games (user_id, game_id, user_name, game_name) VALUES ($1, $2, $3, $4)", 
        [userId.rows[0].user_id, gameId, req.user.name, game.name]
    )

    res.status(201).send()

})

app.post('/login', async (req, res) => {
    

    let valid = true
    let userHashedPassword = ""
    try {
        const userQuery = await pool.query(
            "SELECT user_id, user_password FROM users WHERE user_name=$1", [req.body.username]
        )
        console.log(userQuery.rows[0], "USERQUERY INSIDE LOGIN")
        userHashedPassword = userQuery.rows[0].user_password
    } catch (error) {
        valid = false
    }

    if(valid){
        try{
            if(await bcrypt.compare(req.body.password, userHashedPassword)){
                const username = req.body.username
                const userName = {name: username}
            
                const accessToken = jwt.sign(userName, process.env.ACCESS_TOKEN_SECRET)
                res.status(200).json({accessToken : accessToken})
                
            }
            else{
                res.status(401).json({message: "Invalid Credentials"}).send()
            }
        }catch{
            res.status(500).send()
        }
    }
    else{
        res.status(401).json({message: "Invalid Credentials"}).send()
    }




})

//middleware function
function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403)
        req.user = user;
        next()

    })
}

app.listen(port)