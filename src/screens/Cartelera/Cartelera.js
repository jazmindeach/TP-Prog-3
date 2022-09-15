import React from "react"
import { Link } from "react-router-dom"
import ListadoTodas from "../../components/ListadoTodas/ListadoTodas"

function Cartelera() {
    return (
        <ListadoTodas populares={false} />
    )
}
export default Cartelera