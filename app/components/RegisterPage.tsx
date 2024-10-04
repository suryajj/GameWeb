"use client"


import LoginBox from "./RegisterPage"
import {useRouter} from "next/navigation"


export default function(){

    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
            
        const password = e.target.password.value
        const name = e.target.username.value;

        if(password === "" || name===""){
            
        }
        else{
            try{
                
                const data = await fetch("http://localhost:4000/users", 
                {
                    method: "POST",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({name, password})
                
                })

                
                if(data.ok){
                    
                    router.push('/account')
                    
                }
        
            }
            catch{

            }
        
        }
    }




    return(
        
        <div>

            <div className="outerLoginBox">
                <div className="loginTitle">Account Register</div>
                
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="usernameDiv">

                        <div className="usernameTitle">Username:</div>


                        <input type="text" placeholder="Please enter your username" className="usernameEntry" name="username"/>


                    </div>
                    <div className="passwordDiv">
                        <div className="passwordTitle">Password: </div>
                        <input type="text" placeholder="Please enter your password" className="passwordEntry" name="password"/>
                    </div>
                    
                    <button type="submit" className="submitButton">Register</button>
                </form>
                



            </div>

        </div>
        
    )

}