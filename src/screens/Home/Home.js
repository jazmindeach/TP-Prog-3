import React from "react"
import { Link } from "react-router-dom"
import Listado from "../../components/Listado/Listado"


function Home() {
    return (

        <React.Fragment>
            <Listado populares={true} />
            <Listado populares={false} />
        </React.Fragment>
    )

}
export default Home