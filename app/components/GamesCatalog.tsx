"use client"

import AllGames from './AllGames'
import ReactDOM from 'react-dom'; 
import {useState, useEffect} from 'react';
import {ImStarEmpty, ImStarFull} from "react-icons/im";


export default function(){

    if(localStorage.getItem('jwt_token')){

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const getFavGames = async () => {
            
                const jwt_token = localStorage.getItem('jwt_token');
    
                try{
                    const response = await fetch("http://localhost:4000/fav", 
                    {
                        method: "GET",
                        headers: {
                            'Authorization' : `Bearer ${jwt_token}`
                        }
                    
                    })
    
                    const result = await response.json();
                    setData(result);
                    
                }
                catch{
    
                }
    
            }

            getFavGames();
        }, [])




        console.log(data.length == 0, "dattaaaa")

        



        const getGames = (game: any, i: any) => {
            let src = `https://images.igdb.com/igdb/image/upload/t_cover_med_2x/${game.cover.image_id}.png`
            
          
              return (
                  <div>
                    <div id={i} className="genreGame min-w-max min-h-max">
                        <img src={src} className="genreGamePicture"/>
                        <div className="genreGameTitle h-16 pr-2">{game.name}</div>
                    </div>
                    
                </div>
                    
              )
    
        }

        if(data.length == 0){
            return (

                <div className="w-full h-48 text-2xl flex justify-center mt-10">
              
                
                    Add your favourite games!!
            
                </div>
    
                )
        }

        return (

            <div className="genrePage w-full flex">
          
            
                {data.map(getGames)}
        
            </div>

            )
    }
    else{
        return (<div className="w-full h-48 text-2xl flex justify-center mt-10">
              
                
                    Log in to access your catalog!

            </div>)
    }


    




}