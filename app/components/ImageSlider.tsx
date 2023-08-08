'use client'

import {useState} from "react";

export default function ImageSlider({slides}: any){
    
    const [currentIndex, setCurrentIndex] = useState(0)
   
    
    const src = slides[currentIndex].url;

    const changeSlides = () => {
        if(currentIndex == slides.length-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
        
    }


    return (
        
        <div className="coverContainer">
            <img className="cover" src={src}/>
            <button onClick={changeSlides}>Switch</button>
        </div>
    )
}