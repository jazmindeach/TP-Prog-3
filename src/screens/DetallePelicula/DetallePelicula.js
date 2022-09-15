import React from "react"
import { Link } from "react-router-dom"

function DetallePelicula(props) {
    return (
        <h1> Este es detalle de la pelicula con id {props.match.params.id} </h1>

    )
}
export default DetallePelicula