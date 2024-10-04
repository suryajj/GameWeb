"use client"
import {useState, useEffect} from "react"

export default function GuessGame({data}: any){
    const max = 5;
    const [counter, setCounter] = useState(0)
    const [result, setResult] = useState("");
    const [companies, setCompanies] = useState("")
    const [game, setGame] = useState<Array<{ [key: string]: string }>>([]);
    const [genres, setGenres] = useState("")
    const [obj, setObj] = useState<{[key: string]: any}>({})

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const alphabets1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const alphabets2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const alphabets3 = ['z', 'x','c','v','b','n','m']

    const getRandom = (dataLength: any) => {
        return Math.floor(Math.random()*dataLength)
    }

    const randomIndex = getRandom(data.length)

    const chosenGame = data[randomIndex]
    const name = chosenGame.name.split("")


    const getObj = (obj1: any) => {
        const results : Record<string, string> = {}

        const regex = /^[a-zA-Z0-9]/;

        if(regex.test(obj1)){
            
            results[obj1.toLowerCase()] = "__"
            return results;
        }
        else{
            
            results[obj1.toLowerCase()] = obj1.toLowerCase()
            return results
        }
        
    }

    useEffect(() => {
        let arr = name.map(getObj)
        console.log(arr, "arr")
        setGame(arr)
        setCounter(0)
        setResult("")
        setCompanies("")
        setObj(chosenGame)
        setGenres("")


               
       

    }, [])


    const keySubmit = (e: any) => {
        const letter = e.currentTarget.innerHTML;
        let correct = false;
        let end = true
        const updatedGame = game.map((g: any) => {
            if (Object.keys(g)[0] === letter) {
                correct = true
                return { [letter]: letter };
            }

            if(Object.keys(g)[0] !== Object.values(g)[0]){
                console.log('faalllsssee')
                end = false
            }
            return g;
        });
        if(correct && !end){
            setGame(updatedGame)
        }
        else if(correct && end){
            setResult("You won!")
            setGame(updatedGame)
        }
        else if(counter+1 === max){
            const updatedGame2 = game.map((g: any) => {
                return {[Object.keys(g)[0]]: Object.keys(g)[0]}
            });
            setResult("You lost!")
            setCounter(counter+1)
            setGame(updatedGame2)
        }
        else{
            setCounter(counter+1)

        }
        

    }

    const generateKeys = (key: any, i: any) => {
        let str = "guessGameKey" + key.toString();
        if(i!==0){return <button className="guessGameKey" id={str} onClick={keySubmit}>{key}</button>}
        else{return <button className="guessGameKey" id={str} onClick={keySubmit}>{key}</button> }
    }



    const printGameValues = (gameObj: any, i: any) => {
        const objValues = Object.values(gameObj)
        const objKeys = Object.keys(gameObj)
        if(typeof objValues[0] === 'string'){
            const regex = /^[a-zA-Z0-9]/;
            console.log(objValues[0], "hello")
            if(regex.test(objValues[0])){
                console.log("true")
                if(i!==0){return <div className="guessChar">{objValues[0]}</div>}
                else{return <div className="guessChar firstGuessChar">{objValues[0]}</div>}
            }
            else{
                if(i!==0){return <div className="guessChar">{objValues[0]}</div>}
                else{return <div className="guessChar firstGuessChar">{objValues[0]}</div>}
            }
            
        }
        else{
            return;
        }
        
    }

    const revealCompanies = () => {
        let c = ""
        obj.involved_companies.map((g: any, i:any) => {
            
            if(i!==(obj.involved_companies.length-1)){c = c + g.company.name + ", "}
            else{c = c + " " + g.company.name}
            // setCompanies(companies+g.company.name)
        })
        setCompanies(c)
    }

    const revealGenres = () => {
       
        let c = ""
        
        obj.genres.map((g: any, i:any) => {
            
            if(i!==(obj.genres.length-1)){c = c + g.name + ", "}
            else{c = c + " " + g.name}
        })
        setGenres(c)
    }

    return(
        
        <div className="guessGame">

            <div className="guessGameTitle">Guess the Game!</div>
            <div className="guessGameTries">Tries: {counter}/{max}</div>
            <div className="guessGameGuess flex flex-row">
                <div>Guess:</div>
                &nbsp;
                <div className="flex flex-row">{game.map(printGameValues)}</div>
            </div>
            <div className="guessGameKeyboard">
                
                <div className="guessGameDigits flex flex-row justify-center">{nums.map(generateKeys)}</div>
                <div className="guessGameAlpha1 flex flex-row justify-center">{alphabets1.map(generateKeys)}</div>
                <div className="guessGameAlpha2 flex flex-row justify-center">{alphabets2.map(generateKeys)}</div>
                <div className="guessGameAlpha3 flex flex-row justify-center">{alphabets3.map(generateKeys)}</div>
                
            </div>
            <div className="guessGameHints">
                <div className="flex flex-row">
                    <div className="guessGameCompaniesButton hover:cursor-pointer" onClick={revealCompanies}>Reveal involved companies:&nbsp;</div>
                    <div className="guessGameCompaniesName" id="companyNames">{companies}</div>
                </div>
                <div className="guessGameGenre hover cursor-pointer" onClick={revealGenres}>Reveal genres: {genres}</div>
            </div>
            <div className="displayResult">{result}</div>
            
        </div>
    )
}