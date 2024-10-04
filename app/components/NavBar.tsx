'use client'

import Link from "next/link";
import Search from "./Search";
import {ImHome3, ImCircleDown, ImList2, ImQuestion, ImMan} from "react-icons/im";
import {useState} from "react"

export default function NavBar(){
    
    


    const handleDrop = () => {
        document.getElementById("myDropdown")?.classList.toggle("show");
    }
   
    
        

    return (
        <div className="navBar inner">
            <Link href="/" className="navBarOptions navBarOptionsL">Home<ImHome3 className="ml-2 mb-0.5"/></Link>
            <div className="dropdown"><button onClick={handleDrop}className="navBarOptions navBarOptionsL dropbtn" id="categories">Genre <ImCircleDown className="ml-2"/></button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="/RPG">1. Role-playing</a>
                    <a href="/Adventure">2. Adventure</a>
                    <a href="/TBS">3. Turn-based strategy</a>
                    <a href="/Racing">4. Racing</a>
                    <a href="/Sport">5. Sport</a>
                </div>
            </div>
            <Link href="/catalog" className="navBarOptions navBarOptionsL" id="deals">Catalog<ImList2 className="ml-2 text-sm"/></Link>
            <Link href="/guess-the-game" className="navBarOptions navBarOptionsL" id="newItems">Guess the game <ImQuestion className="ml-2"/></Link>
            <Link href="/account" className="navBarOptions navBarOptionsR" id="account">Account <ImMan className="ml-2"/></Link>
        </div>
    );
    
    
}