'use client'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {useState} from "react";


export let index: number;

export default function ImageSlider({slides, currentIndex, setCurrentIndex}: any){
    
    
    // const [currentIndex, setCurrentIndex] = useState(0)
    


    const src = slides[currentIndex].url;

    const nextSlide = () => {
        if(currentIndex == slides.length-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
        index = currentIndex;
        
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

        index = currentIndex;
    }


    return (
        
        <div className="coverContainer">
            <button onClick={prevSlide} className="arrows prevArrow"><span><FaAngleLeft/></span></button>
            <img className="cover" src={src}/>
            <button onClick={nextSlide} className="arrows nextArrow"><span ><FaAngleRight/></span></button>
        </div>
    )
}