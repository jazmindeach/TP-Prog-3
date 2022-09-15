import React from "react"
import { Link } from "react-router-dom"
import ListadoTodas from "../../components/ListadoTodas/ListadoTodas"

function Populares() {
    return (
        <ListadoTodas populares={true} />
    )
}
export default Populares