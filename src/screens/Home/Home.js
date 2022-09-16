import React, {Component} from "react"
import { Link } from "react-router-dom"
import Listado from "../../components/Listado/Listado"
import UnaPelicula from "../../components/UnaPelicula/UnaPelicula" 
import "./Home.css"


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [], 
            input: "",
            mensaje: 'Cargando...'

        }
    }
    preventSubmit(event) {
        event.preventDefault();
    }
    guardarCambios(event) {
        this.setState({ input: event.target.value }, () => this.ResultadosDeBusqueda())

    }
    ResultadosDeBusqueda(){
        if (this.state.input.length!==0) {
            fetch(`https:api.themoviedb.org/3/search/movie?api_key=627cbec155d5e3d21e03021421fffc3a&query=${this.state.input}`)
            .then(response => response.json())
            .then(data => {
                data.results.length !== 0 ? 
                    this.setState({ datos: data.results}, ()=> console.log(data))
                    : 
                    this.setState({
                        mensaje: "No se encontraron resultados de busqueda"
                    },()=> console.log(this.state.mensaje)) 
            })
            .catch(error => console.log('El error fue: ' + error))
        }
    }
    render(){
        console.log(this.state.datos === [])
        console.log(this.state.mensaje=== "No se encontraron resultados de busqueda")
        return (
            this.state.input.length===0 ?
            <React.Fragment>
                <h1> Home </h1>
                <form onSubmit={(event) => this.preventDefault(event)}>
                    <input placeholder="Buscar" onChange={(event => this.guardarCambios(event))} value={this.state.input} />
                </form>
                <Listado populares={true} />
                <Listado populares={false} />
            </React.Fragment>
            :
            <React.Fragment>
                <h1> Resultados de busqueda </h1>
                <form onSubmit={(event) => this.preventDefault(event)}>
                    <input placeholder="Buscar" onChange={(event => this.guardarCambios(event))} value={this.state.input} />
                </form>
                <section className="contenedor"> 
                {this.state.datos === []||this.state.mensaje=== "No se encontraron resultados de busqueda" ? <h3 id="error">{this.state.mensaje}</h3> :
                        this.state.datos.map((unaPelicula, idx) => <UnaPelicula info={unaPelicula} key={idx} />)

                    }
                </section>
            </React.Fragment>



        )
    }

}
export default Home