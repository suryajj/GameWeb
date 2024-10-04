import {CLIENT_ID, ACCESS_TOKEN} from "../../apiInfo";
import Genres from "../components/Genres"
async function RPG(){
      
        const data = await fetch(
          "https://api.igdb.com/v4/games",
          { method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Client-ID': CLIENT_ID,
              'Authorization': 'Bearer ' + ACCESS_TOKEN,
            },
            body: "fields name,screenshots.image_id,genres.name,rating_count,rating,cover.image_id,platforms.name,summary,first_release_date; where genres = (12) & rating_count > 50; sort rating desc; limit 20;" 
        })
          
      
            
        return data.json()
      
      
}





export default async function Roleplay(){
    
   let j = 0;




    
    const data1 = await RPG();

    return (
        <Genres data={data1}/>
    )
}