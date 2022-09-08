import React from "react"
import {Link} from "react-router-dom"

function Header (){
    return (
            <nav> 
                <ul> <Link to="/"> Home </Link></ul>
                <ul> <Link to="/favoritos"> Favoritos </Link></ul>     {/* Faltan  */}
                <ul> <Link to="/populares"> Populares </Link></ul>
                <ul> <Link to="/cartelera"> Cartelera </Link></ul>
                <div> <img className='logo' src='../img/logo.png'/>  </div>
               


            </nav>


    )
}
export default Header