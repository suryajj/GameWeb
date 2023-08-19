import {AiOutlineStock} from 'react-icons/ai';


export default function TopFifteen({games, currentIndex, setCurrentIndex}: any){
    

    const highlight = (i: any) => {
        setCurrentIndex(i)
    }
    
    let styless = {
        "fontWeight": "700"
    };

    const getGames = (game: any, i: any) => {
        if(i == currentIndex){
            return <div className="top15Game bg-purple-400" id={game.name} onClick={() => {
                highlight(i)
            }} style={styless}>{i+1}. {game.name}</div>
        }
        return <div className="top15Game" id={game.name} onClick={() => {
            highlight(i)
        }}>{i+1}. {game.name}</div>
    }
    

    

    return (
        <div className="top15 flex-col">
            <div className="top15Title">
                Top 15 Games <AiOutlineStock className="ml-2 mt-1"/>
            </div>
            <div className="top15Games flex">
                {games.map(getGames)}
            </div>
        </div>
    )
}