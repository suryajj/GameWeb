import Home from "./components/Home"
import {CLIENT_ID, ACCESS_TOKEN} from "../apiInfo";
import {useState} from 'react';

const getData = async () => {    
  const data = await fetch(
    "https://api.igdb.com/v4/games",
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': CLIENT_ID,
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
      },
      body: "fields genres.name,platforms.name,name,aggregated_rating,screenshots.image_id,summary,rating,first_release_date,aggregated_rating_count,rating_count,cover.image_id,version_parent,involved_companies.company.*; where rating > 90 & rating_count > 50 & aggregated_rating > 4 & version_parent=null; sort rating desc; limit 15;"
  })
    

      
  return data.json()

}

const setUrl = (game: any) => {
  
  let source = `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.png`
  
  return {url: source};
}

export default async function Landing() {
  const slides = []
  const data = await getData();
  

  for(let i = 0; i < data.length; i++){
    const image = setUrl(data[i])
    slides.push(image)
  }

  



  return (
    <Home data={data} slides={slides}/>
  )
}
