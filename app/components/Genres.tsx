
"use client"




export default function Genres({data}: any){
    
    const handleClick = (e: any) => {
        
        let parentDiv = e.currentTarget;

        let image = parentDiv.querySelector(".genreGamePicture");

        
        


        let imageSrc = `\"https://images.igdb.com/igdb/image/upload/t_720p/${data[parseInt(parentDiv.id)].cover.image_id}.png\"`
        image.outerHTML = `<img src=${imageSrc} class=\"genreGamePicture\"/>`

        let name = parentDiv.querySelector(".genreGameTitle")
        name.outerHTML = `<div class=\"chosenGenreGameTitle\">${data[parseInt(parentDiv.id)].name}</div>`



        let str = parentDiv.outerHTML;
        let ele = document.querySelector(".genrePage")
        
        

        let container = "<div class=\"chosenGenrePage w-full flex\"><div class=\"chosenGame w-full flex justify-center items-center\">" + str + "</div></div>"

        if(ele === null){
            return;
        }

        ele.outerHTML = container;

    }
    
    
    const getGames = (game: any, i: any) => {
        let src = `https://images.igdb.com/igdb/image/upload/t_cover_med_2x/${game.cover.image_id}.png`
        
      
          return (
              
                <div onClick={handleClick} id={i + " genreImage"}className="genreGame min-w-max min-h-max">
                    <img src={src} className="genreGamePicture"/>
                    <div className="genreGameTitle">{game.name}</div>
                </div>
              
                
          )

    }


    return (
        <div className="genrePage w-full flex">
          
            
                {data.map(getGames)}
            
        </div>
    )

}