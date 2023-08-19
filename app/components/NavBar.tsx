import Link from "next/link";
import Search from "./Search";
import {ImHome3, ImCircleDown, ImList2, ImQuestion, ImMan} from "react-icons/im";

export default function NavBar(){
    
   
    return (
        <div className="navBar inner">
            <Link href="/" className="navBarOptions navBarOptionsL">Home<ImHome3 className="ml-2 mb-0.5"/></Link>
            <button className="navBarOptions navBarOptionsL" id="categories">Genre <ImCircleDown className="ml-2"/></button>
            <Link href="/catalog" className="navBarOptions navBarOptionsL" id="deals">Catalog<ImList2 className="ml-2 text-sm"/></Link>
            <Link href="/guess-the-game" className="navBarOptions navBarOptionsL" id="newItems">Guess the game <ImQuestion className="ml-2"/></Link>
            <Search/>
            <Link href="/account" className="navBarOptions navBarOptionsR" id="account">Account <ImMan className="ml-2"/></Link>
        </div>
    );
}