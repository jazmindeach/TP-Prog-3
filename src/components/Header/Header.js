import React from "react"
import {Link} from "react-router-dom"

function Header (){
    return (
            <nav> 
                <p> <Link to="/"> Home </Link></p>
                <p> <Link to="/favoritos"> Favoritos </Link></p>     {/* Faltan  */}
                <p> <Link to="/populares"> Populares </Link></p>
                <p> <Link to="/cartelera"> Cartelera </Link></p>



            </nav>


    )
}
export default Header