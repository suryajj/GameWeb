'use client'

import {useSearchParams} from "next/navigation"
import {useState, useEffect} from "react"
import GetSearch from "../components/GetSearch"
import {CLIENT_ID, ACCESS_TOKEN} from "../../apiInfo"






export default function Results(){

    const searchParams = useSearchParams();
    const search = searchParams.get('search_query');
    // console.log(search, "search")

    
    

    return (
        <div>
            Results
            <GetSearch search={search}/>
        </div>
        
    )
}