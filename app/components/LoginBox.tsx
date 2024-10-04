
"use client"

import {useRouter} from "next/navigation"
import {useState} from "react"


export default function(){

    const router = useRouter();

    const [invalid, setInvalid] = useState("");

    if(!localStorage.getItem('jwt_token')){
        const handleSubmit = async (e:any) => {
            e.preventDefault();
            const password = e.target.password.value
            const username = e.target.username.value;

            try{
                const data = await fetch("http://localhost:4000/login", 
                {
                    method: "POST",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({username, password})
                
                })

                const response = await data.json();
                
                if(data.ok){
                    localStorage.setItem("jwt_token", response.accessToken)
                    localStorage.setItem("name", username)

                    
                    router.push('/catalog')
                    
                }
                else{
                    setInvalid("Invalid Credentials")
                }
        
            }
            catch{

            }




        }

        return (

            <div>

                <div className="outerLoginBox">
                    <div className="loginTitle">Account Log In</div>
                    <div className="m-5 bg-red-300 text-lg">{invalid}</div>
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div className="usernameDiv">

                            <div className="usernameTitle">Username:</div>


                            <input type="text" placeholder="Please enter your username" className="usernameEntry" name="username"/>


                        </div>
                        <div className="passwordDiv">
                            <div className="passwordTitle">Password: </div>
                            <input type="text" placeholder="Please enter your password" className="passwordEntry" name="password"/>
                        </div>
                        
                        <button type="submit" className="submitButton">Log In</button>
                    </form>
                    



                </div>

                <button className="registerButton" onClick={() => {
                    router.push('/register')
                }}>Register</button>

            </div>
        )
    }
    else{

        const handleClick = () => {
            localStorage.removeItem("jwt_token")
            localStorage.removeItem("name")
            
            router.push('/')
        }



        return (
            <div>
                <div className="outerLoginBox">

                    <div className="loggedinBox">

                        <div className="loggedinInfo">You are logged in!</div>


                        <button onClick={handleClick} className="logoutButton">
        
                            Logout
        
                        </button>
                    </div>

                    

                </div>



            </div>
        )
    }
}