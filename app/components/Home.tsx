'use client'
import ImageSlider from "./ImageSlider";
import Stats from "./Stats";
import TopFifteen from "./TopFifteen";
import {useState} from 'react';

export default function Home({data, slides}: any){
    
    const [currentIndex, setCurrentIndex] = useState(0)
    let game = data[currentIndex]
    
    return (
        <div className="home">
            <TopFifteen games={data} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <div className="covers">
            <ImageSlider slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            </div>
            <Stats game={game}/>
        </div>
    )
}