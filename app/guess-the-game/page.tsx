import {CLIENT_ID, ACCESS_TOKEN} from "../../apiInfo"

const getData = async () => {    
    const data = await fetch(
      "https://api.igdb.com/v4/games",
      { method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': CLIENT_ID,
          'Authorization': 'Bearer ' + ACCESS_TOKEN,
        },
        body: "fields name,cover.*; where rating > 85 & rating_count > 50 & aggregated_rating > 4 & version_parent=null; limit 500;"
    })
      
  
        
    return data.json()
  
  }


export default async function GuessTheGame(){

    let data = await getData();

    const printName = (game: any) => {
            return <div>{game.name}</div>
    }

    return (
        <div>
            {data.map(printName)}
        </div>
    )
}