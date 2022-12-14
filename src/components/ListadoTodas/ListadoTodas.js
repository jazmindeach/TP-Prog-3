import React, { Component } from 'react'
import UnaPelicula from '../UnaPelicula/UnaPelicula'
import { Link } from 'react-router-dom'
import "./ListadoTodas.css"
import Loader from '../Loader/Loader'

class ListadoTodas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            pageNumber: 1,
            input: "",
            datosFiltrados: [],
            cargando: true
        }
    }
    componentDidMount() {
        fetch(this.props.populares ? `https://api.themoviedb.org/3/movie/popular?api_key=627cbec155d5e3d21e03021421fffc3a&page=${this.state.pageNumber}` : `https://api.themoviedb.org/3/movie/now_playing?api_key=627cbec155d5e3d21e03021421fffc3a&page=${this.state.pageNumber}`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    { this.setState({ datos: data.results, pageNumber: this.state.pageNumber + 1, cargando: false }) }
                }, 3000)
            })
            .catch(error => console.log('El error fue: ' + error))
    }
    cargarMas() {
        fetch(this.props.populares ? `https://api.themoviedb.org/3/movie/popular?api_key=627cbec155d5e3d21e03021421fffc3a&page=${this.state.pageNumber}` : `https://api.themoviedb.org/3/movie/now_playing?api_key=627cbec155d5e3d21e03021421fffc3a&page=${this.state.pageNumber}`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    { this.setState({ datos: this.state.datos.concat(data.results), pageNumber: this.state.pageNumber + 1, cargando: false }) }
                }, 3000)
            })
            .catch(error => console.log('El error fue: ' + error))
    }

    preventSubmit(event) {
        event.preventDefault();
    }
    guardarCambios(event) {
        this.setState({ input: event.target.value })
        if (event.target.value.length !== 0) {



            let filtrado = this.state.datos.filter((unaPelicula) => {
                return unaPelicula.title.toLowerCase().includes(event.target.value)
            })
            console.log(filtrado)
            this.setState({ datosFiltrados: filtrado }, () => { console.log(this.state.datosFiltrados) })

        } else {
            this.setState({ datosFiltrados: "" })
        }

    }



    render() {

        if(this.state.cargando) {
            return <Loader/>
        }

        let mostrar = "Cargando"
        if (this.state.datos.length !== 0) {
            mostrar = this.state.datos
            if (this.state.input.length !== 0 && this.state.datosFiltrados !== []) {
                mostrar = this.state.datosFiltrados

            }
            else if (this.state.input.length !== 0 && this.state.datosFiltrados.length === 0) { mostrar = "No se encontraron resultados de b??squeda" }
            console.log(mostrar)
        }






        return (
            <React.Fragment>
                
                <h1> {this.props.populares ? "Peliculas Populares" : "Pel??culas en cartelera"} </h1>
                <form onSubmit={(event) => this.preventDefault(event)}>
                    <input placeholder="Buscar" onChange={(event => this.guardarCambios(event))} value={this.state.input} />
                </form>

                <section class="contenedor">
                    {mostrar === "Cargando" || mostrar === "No se encontraron resultados de b??squeda" ? <h4> {mostrar} </h4> :

                        mostrar.map((unaPelicula, idx) => <UnaPelicula info={unaPelicula} key={idx} />)
                    }
                </section>


                <div id="cargarmas">
                    <button onClick={() => this.cargarMas()}> Cargar mas peliculas</button>
                </div>
            </React.Fragment>

        )
    }


}

export default ListadoTodas