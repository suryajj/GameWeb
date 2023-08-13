'use client'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {useState} from "react";

export default function ImageSlider({slides}: any){
    
    const [currentIndex, setCurrentIndex] = useState(0)
   
    const src = slides[currentIndex].url;

    const nextSlide = () => {
        if(currentIndex == slides.length-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
        
    }

    const prevSlide = () => {
        console.log(currentIndex, "current")
        let length = slides.length-1;
        if(currentIndex == 0){
            setCurrentIndex(length)
        }
        else{
            setCurrentIndex(currentIndex-1)
        }
    }


    return (
        
        <div className="coverContainer">
            <button onClick={prevSlide} className="arrows prevArrow"><FaAngleLeft/></button>
            <img className="cover" src={src}/>
            <button onClick={nextSlide} className="arrows nextArrow"><FaAngleRight/></button>
        </div>
    )
}