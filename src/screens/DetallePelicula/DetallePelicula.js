import React, { Component } from "react"
import Loader from '../../components/Loader/Loader'
import './detallePelicula.css'
class DetallePelicula extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pelicula: null,
            cargando: true,
            agregado: false,
        }
    }

    componentDidMount() {
        //llama a la api
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=627cbec155d5e3d21e03021421fffc3a`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    this.setState({pelicula: data, cargando: false})
                }, 3000)
            })
        .catch(error => console.log('El error fue: ' + error))


        //buscar si ya la tengo en el local

    }

    render() {

        if(this.state.cargando) {
            return <Loader/>
        }

        let agregar = () => {

            let datos = localStorage.getItem('peliculas');

            if(datos == null) {
                let peliculas = JSON.stringify([this.state.pelicula])
                localStorage.setItem('peliculas', peliculas)
            }
            else {
                let peliculas = JSON.parse(datos)
                console.log(peliculas);
            }

            this.setState({
                pelicula: this.state.pelicula, 
                cargando: this.state.cargando,
                agregado: true
            })

        }


        return (
            <section id="contenedor">
                <article id="pelicula">
                    <img src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt="" />
                    <div>
                        <h3>{this.state.pelicula.title}</h3>
                        <p>{this.state.pelicula.overview}</p>
                        <br />
                        <p>Rating {this.state.pelicula.vote_count} </p>
                        <p>Fecha de estreno {this.state.pelicula.release_date}</p>
                        <p>Duración {this.state.pelicula.runtime} min.</p>
                        {this.state.pelicula.genres.map(genero => <p key={genero.id}>{genero.name}</p>)}
                        {this.state.agregado 
                            ? <button onClick={agregar}>Eliminar de favoritos</button>
                            : <button onClick={agregar}>Agregar a favoritos</button>
                        }
                    </div>
                </article>
            </section>
        )
    }
}

export default DetallePelicula