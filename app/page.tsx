import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import {CLIENT_ID, ACCESS_TOKEN} from "../apiInfo";
import ImageSlider from "./components/ImageSlider";
const handleClick = async () => {
  const response = await fetch(
    "https://api.igdb.com/v4/covers",
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': CLIENT_ID,
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
      },
      body: "fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width; limit 10;"
  })
  return response.json()

}

const printGame = (game: any) => {
  
  let source = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.image_id}.png`
  return {url: source, title: game.game};
}

export default async function Landing() {
  
  const slides = []
  const games = await handleClick();
  
  slides.push(games.map(printGame))

  return (
    
      <div className="covers">
        <div>{slides[0].url}</div>
        <ImageSlider slides={slides}/>
      </div>
  )
}
