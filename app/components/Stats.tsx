export default function Stats({game} : any) {
    
    


    const src = (image_id: any) => {
        return `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${image_id}.png`
    }   

    return(
        <div className="stats flex flex-col border-2 border-blue-300">
            <div className='statsTitle flex justify-start text-xl text-purple-400 font-bold'>
                {game.name}
            </div>
            <div className="statsCompany text-lg text-purple-300 italic opacity-50">
                
                {game.involved_companies === undefined ? "" : game.involved_companies[0].company.name}
            </div>
            <div className="releaseAndScore flex flex-row w-full justify-between text-lg text-purple-200">
                <div className="releaseDate">
                    Release date: {Math.trunc((1970+((game.first_release_date)/86400)/365))}
                </div>
                <div className="score">
                    Score: {Math.round(game.rating*10)/10}/100
                </div>

            </div>
           
            <div className="genres flex flex-row text-sm text-blue-200">
                Genres: &nbsp; {((game.genres.length > 1) ? <div>{game.genres[0].name},&nbsp;{game.genres[1].name}</div> :  <div>{game.genres[0].name}</div>)}
            </div>

            <div className="platform flex flex-row text-sm text-blue-200">
                Platforms: &nbsp; {((game.platforms.length > 1) ? <div>{game.platforms[0].name},&nbsp;{game.platforms[1].name}</div> :  <div>{game.platforms[0].name}</div>)}
            </div>

            <div className="screenshots">
                {(game.screenshots.length > 1) ? <div><img className="border-2 mb-2 mt-2" src={src(game.screenshots[0].image_id)}/><img className="border-2 mb-3"src={src(game.screenshots[1].image_id)}/></div> :  <div><img className="border-2 mb-3 mt-2" src={src(game.screenshots[0].image_id)}/></div>}
            </div>
            <div className="summary text-sm text-blue-200">

                {game.summary}
            </div>

        </div>
    )
}