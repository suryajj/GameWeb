import Link from "next/link";


export default function NavBar(){
    return (
        <div className="navBar inner">
            <button id="homePage" className="navBarOptions navBarOptionsL"><Link href="/">Home</Link></button>
            <button className="navBarOptions navBarOptionsL" id="categories">Genre</button>
            <button className="navBarOptions navBarOptionsL" id="deals"><Link href="/catalog">Catalog</Link></button>
            <button className="navBarOptions navBarOptionsL" id="newItems"><Link href="/guess-the-game">Guess the game</Link></button>
            <input type="text" className="navBarOptions navBarOptionsL searchItems" placeholder="Search for items"/>
            <button className="navBarOptions navBarOptionsR" id="account"><Link href="/account">Account</Link></button>
        </div>
    );
}