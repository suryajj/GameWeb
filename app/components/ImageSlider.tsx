'use client'

import {useState} from "react";

export default function ImageSlider({slides}: any){
    console.log(slides[0])
    const [currentIndex, setCurrentIndex] = useState(1)
    const slideStyles = {
        backgroundImage: `url(${slides[0][currentIndex].url})`,
      };
    return (
        
        <div className="coverContainer">
            <div className="cover" style={slideStyles}></div>
        </div>
    )
}