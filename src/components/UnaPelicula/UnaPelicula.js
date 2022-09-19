import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./UnaPelicula.css"

class UnaPelicula extends Component {

    constructor(props) {
        super(props)
        this.state = {
            agregado: false,
            texto: "Ver más",
            clase: "oculto"
        }
    }


    componentDidMount() {
        //buscar si ya la tengo en el local
        let datos = localStorage.getItem('peliculas');

        if(datos) {
            let peliculas = JSON.parse(datos)
            let buscarPelicula = peliculas.find(pelicula => pelicula.id == this.props.info.id)

            if(buscarPelicula != null) {
                this.setState({
                    agregado: true,
                    texto: "Ver más",
                    clase: "oculto"
                })
            }
        }

    }

    descripcion() {

        if (this.state.clase === "oculto") {

            this.setState({

                texto: "Ver menos",
                clase: "mostrar"
            })

        } else {
            this.setState({
                texto: "Ver más",
                clase: "oculto"
            })

        }

    }
    render() {

        let agregar = () => {

            let datos = localStorage.getItem('peliculas');

            if(datos == null) {
                let peliculas = JSON.stringify([this.props.info])
                localStorage.setItem('peliculas', peliculas)
            }
            else {
                let peliculas = JSON.parse(datos)
                peliculas.push(this.props.info)
                localStorage.setItem('peliculas', JSON.stringify(peliculas))
            }

            this.setState({
                cargando: this.state.cargando,
                agregado: true,
                texto: "Ver más",
                clase: "oculto"
            })

        }

        let eliminar = () => {

            let datos = localStorage.getItem('peliculas');
            let peliculas = JSON.parse(datos);
            let favoritos = peliculas.filter(pelicula => pelicula.id != this.props.info.id)
            localStorage.setItem('peliculas', JSON.stringify(favoritos));

            this.setState({
                pelicula: this.state.pelicula, 
                cargando: this.state.cargando,
                agregado: false
            })
        }

        return (
            <React.Fragment>
                <div className="unapelicula">
                    <Link to={`/detallePelicula/id/${this.props.info.id}`}> <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`} /></Link>

                    <h2> {this.props.info.title}</h2>
                    <div className="info">
                        <p className={this.state.clase}> {this.props.info.overview}</p>
                        <p id="descripcion" onClick={() => this.descripcion()}> {this.state.texto} </p>
                        {this.state.agregado 
                            ? <button onClick={eliminar}>Eliminar de favoritos</button>
                            : <button onClick={agregar}>Agregar a favoritos</button>
                        }
                    </div>
                </div>
            </React.Fragment>

        )
    }


}


export default UnaPelicula