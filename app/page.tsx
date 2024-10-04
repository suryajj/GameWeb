import Home from "./components/Home"
import {CLIENT_ID, ACCESS_TOKEN} from "../apiInfo";

const getData = async () => {    
  const data = await fetch(
    "https://api.igdb.com/v4/games",
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': CLIENT_ID,
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
      },
      body: "fields genres.name,platforms.name,name,aggregated_rating,screenshots.image_id,summary,rating,first_release_date,aggregated_rating_count,rating_count,cover.image_id,version_parent,involved_companies.company.name; where rating > 90 & rating_count > 50 & aggregated_rating > 4 & version_parent=null; sort rating desc; limit 15;"
  })
    

      
  return data.json()

}


const getSearch = async () => {    

  const data = await fetch(
    "https://api.igdb.com/v4/genres",
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': CLIENT_ID,
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
      },
      body: "fields name; sort rating desc; limit 500;" 
  })
    
  // { id: 4, name: 'Fighting' },
  // { id: 5, name: 'Shooter' },
  // { id: 7, name: 'Music' },
  // { id: 8, name: 'Platform' },
  // { id: 9, name: 'Puzzle' },
  // { id: 10, name: 'Racing' },
  // { id: 11, name: 'Real Time Strategy (RTS)' },
  // { id: 12, name: 'Role-playing (RPG)' },
  // { id: 13, name: 'Simulator' },
  // { id: 14, name: 'Sport' },
  // { id: 15, name: 'Strategy' },
  // { id: 16, name: 'Turn-based strategy (TBS)' },
  // { id: 24, name: 'Tactical' },
  // { id: 26, name: 'Quiz/Trivia' },
  // { id: 25, name: "Hack and slash/Beat 'em up" },
  // { id: 30, name: 'Pinball' },
  // { id: 31, name: 'Adventure' },
  // { id: 33, name: 'Arcade' },
  // { id: 34, name: 'Visual Novel' },
  // { id: 32, name: 'Indie' },
  // { id: 35, name: 'Card & Board Game' },
  // { id: 36, name: 'MOBA' },
  // { id: 2, name: 'Point-and-click' }
      
  return data.json()

}


const setUrl = (game: any) => {
  
  let source = `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.png`
  
  return {url: source};
}

export default async function Landing() {
  const slides = []
  const data = await getData();
  const genre = await getSearch();
  console.log(genre, "genre");
  

  for(let i = 0; i < data.length; i++){
    const image = setUrl(data[i])
    slides.push(image)
  }

  



  return (
    <Home data={data} slides={slides}/>
  )
}
