import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <nav>
            <div id="links">
                <Link to="/"> Home </Link>
                <Link to="/favoritos"> Favoritos </Link>    {/* Faltan  */}
                <Link to="/populares"> Populares </Link>
                <Link to="/cartelera"> Cartelera </Link>

            </div>

            <div> <img className='logo' src='../img/logo.png' />  </div>
        </nav>


    )
}
export default Header