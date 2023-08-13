import Link from "next/link";


export default function NavBar(){
    return (
        <div className="navBar inner">
            <Link href="/" className="navBarOptions navBarOptionsL">Home</Link>
            <button className="navBarOptions navBarOptionsL" id="categories">Genre</button>
            <Link href="/catalog" className="navBarOptions navBarOptionsL" id="deals">Catalog</Link>
            <Link href="/guess-the-game" className="navBarOptions navBarOptionsL" id="newItems">Guess the game</Link>
            <input type="text" className="navBarOptions navBarOptionsL searchItems" placeholder="Search for items..."/>
            <Link href="/account" className="navBarOptions navBarOptionsR" id="account">Account</Link>
        </div>
    );
}