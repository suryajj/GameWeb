
import {CLIENT_ID, ACCESS_TOKEN} from "../../apiInfo";
import {useEffect} from "react";

export const getSearch = async (str: any) => {    

    const data = await fetch(
      "https://api.igdb.com/v4/games",
      { method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': CLIENT_ID,
          'Authorization': 'Bearer ' + ACCESS_TOKEN,
          
        },
        body: "fields name; search \"" + str + "\"*; limit 10;" 
    })
      
    return await data.json();
  
}



export default async function GetSearch({search}: any){
    


    // useEffect(await getSearch(search), [search]);
    // console.log(search, "searssssch")
    // const search2 = await getSearch(search);
    // console.log(search2)
    
    return (
        // <div>{search}</div>
        <div>{search}</div>
    )
}