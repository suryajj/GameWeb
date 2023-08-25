import {CLIENT_ID, ACCESS_TOKEN} from "../../apiInfo";
import Genres from "../components/Genres"
async function TBS(){
      
        const data = await fetch(
          "https://api.igdb.com/v4/games",
          { method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Client-ID': CLIENT_ID,
              'Authorization': 'Bearer ' + ACCESS_TOKEN,
            },
            body: "fields name,genres,rating_count,rating,cover.image_id; where genres = (16) & rating_count > 50; sort rating desc; limit 20;" 
        })
          
      
            
        return data.json()
      
      
}





export default async function TurnBased(){
    
   let j = 0;




    
    const data1 = await TBS();

    return (
        <Genres data={data1}/>
    )
}