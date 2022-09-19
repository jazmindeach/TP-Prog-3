import React, { Component } from 'react'
import UnaPelicula from '../UnaPelicula/UnaPelicula'
import { Link } from 'react-router-dom'
import "./Listado.css"
import Loader from '../Loader/Loader'

class Listado extends Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            cargando: true
        }
    }
    componentDidMount() {
        fetch(this.props.populares ? `https://api.themoviedb.org/3/movie/popular?api_key=627cbec155d5e3d21e03021421fffc3a` : `https://api.themoviedb.org/3/movie/now_playing?api_key=627cbec155d5e3d21e03021421fffc3a`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    { this.setState({ 
                        datos: data.results.slice(0,8),
                        cargando: false }) }
                }, 3000)
            })
            .catch(error => console.log('El error fue: ' + error))
    }

    render() {

        if(this.state.cargando) {
            return <Loader/>
        }

        return (
            <React.Fragment>
                <h1> {this.props.populares ? "Peliculas Populares" : "Películas en cartelera"} </h1>
                <section className="contenedor">
                    {this.state.datos === [] ? <h3>Cargando ...</h3> :
                        this.state.datos.map((unaPelicula, idx) => <UnaPelicula info={unaPelicula} key={idx} />)

                    }
                </section>
                <h2 className="vertodas"> <Link to={this.props.populares ? "/populares" : "/cartelera"}>  Ver todas las {this.props.populares ? "Peliculas Populares" : "Películas en cartelera"}</Link></h2>

            </React.Fragment>

        )
    }


}

export default Listado