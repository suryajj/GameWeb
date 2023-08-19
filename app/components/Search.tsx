'use client'
import {AiOutlineSearch} from 'react-icons/ai'
import {useRouter} from "next/navigation"

export default function(){
    
    
    
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        let formData = new FormData(e.target)
        let req = formData.get("searchReq");
        if(req === null){
            return;
        }
             
        const searchParams = new URLSearchParams({search_query: req.toString()});
        router.push("/results" + "?" + searchParams.toString());
    }
    
    return (<form onSubmit={handleSubmit} id="search">
                <input type="text" id="searchItems" name="searchReq"className="navBarOptions navBarOptionsL searchItems" placeholder="Search for items..." required/>
                <button type="submit" className="searchIcon"><AiOutlineSearch/></button>
            </form>
    )
}