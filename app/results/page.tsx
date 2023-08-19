'use client'

import {useSearchParams} from "next/navigation"

export default function Results(){

    const searchParams = useSearchParams();
    const search = searchParams.get('search_query');

    return (
        <div>
            Results
            <div>{search}</div>
        </div>
        
    )
}