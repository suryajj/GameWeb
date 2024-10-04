import {CLIENT_ID, ACCESS_TOKEN} from "../../apiInfo";
import Genres from "../components/Genres"
async function getData(){
      
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
          //genre is 14 for sports 12 for now bc not working
      
            
        return data.json()
      
      
}






export default async function Sport(){
    
   let j = 0;




    
    const data1 = await getData();

    return (
        <Genres data={data1}/>
    )
}