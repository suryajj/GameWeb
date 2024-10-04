
"use client"

import Stats from "./Stats"
import ReactDOM from 'react-dom'; 
import {ImStarEmpty, ImStarFull} from "react-icons/im";
import {useState} from "react";


export default function Genres({data}: any){
    


    const addToFav = async (game:any) => {


        
        const jwt_token = localStorage.getItem('jwt_token');

        try{
            const data = await fetch("http://localhost:4000/fav", 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${jwt_token}`,
                    
                },
                body: JSON.stringify(game)
                
            
            })

            const response = await data.json();
            
            
            setGames(response)
            
            return response[0].username;
    
        }
        catch{

        }

    }


    const setGames = (game:any) => {
        console.log(game, "gamesFetchedIntoGenres")
    }

    const handleClick = (e: any) => {
        
        let parentDiv = e.currentTarget;

        let image = parentDiv.querySelector(".genreGamePicture");

        
        


        let imageSrc = `\"https://images.igdb.com/igdb/image/upload/t_720p/${data[parseInt(parentDiv.id)].cover.image_id}.png\"`
        image.outerHTML = `<img src=${imageSrc} class=\"genreGamePicture\"/>`

        let name = parentDiv.querySelector(".genreGameTitle")
        name.outerHTML = ""



        
        let ele = document.querySelector(".genrePage")
        
        if(ele === null){
            return;
        }

        ele.innerHTML = ""; 
        ele.classList.toggle("toggleDisplay")
        
        ele.appendChild(parentDiv)

        let container = document.createElement('div');

        ReactDOM.render(<Stats game={data[parentDiv.id]}/>, container)

        ele.appendChild(container)
        

    }
    
    
    const getGames = (game: any, i: any) => {
        let src = `https://images.igdb.com/igdb/image/upload/t_cover_med_2x/${game.cover.image_id}.png`
        
      
          return (
              <div className="genreGame min-w-max min-h-max">
                <div onClick={handleClick} id={i}>
                    <img src={src} className="genreGamePicture"/>
                    <div className="genreGameTitle h-16 pr-2">{game.name}</div>
                </div>
                <button onClick={() => {addToFav(game)}} className="startButton w-full pb-2"><ImStarEmpty/></button>
            </div>
                
          )

    }



    console.log(data, "genresData")

    return (

        

        <div className="genrePage w-full flex">
          
            
                {data.map(getGames)}
            
        </div>
    )

}