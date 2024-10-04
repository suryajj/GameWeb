export default function AllGames({data}: any){

    const getGames = (game: any, i: any) => {
        let src = `https://images.igdb.com/igdb/image/upload/t_cover_med_2x/${game.cover.image_id}.png`
        
      
          return (
              <div>
                <div id={i}className="genreGame min-w-max min-h-max">
                    <img src={src} className="genreGamePicture"/>
                    <div className="genreGameTitle h-16 pr-2">{game.name}</div>
                </div>
                
            </div>
                
          )

    }



    return (
        <div>{data.map(getGames)}</div>
    )



}