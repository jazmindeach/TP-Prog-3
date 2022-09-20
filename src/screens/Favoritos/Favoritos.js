import React,{Component} from "react"
import UnaPelicula from "../../components/UnaPelicula/UnaPelicula"



class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: [],
            cargando: true
        }
    }
    componentDidMount() {
        let datos = localStorage.getItem("peliculas")
        console.log (datos)
        if (datos) {
            this.setState ({
                favoritos: JSON.parse(datos),
                cargando:this.state.cargando
            })
        }
    }

    actualizar(id) {
        let filtrados = this.state.favoritos.filter (favorito => favorito.id != id)
            this.setState ({
            favoritos: filtrados,
            cargando:this.state.cargando
        })
    }


    render() {
        return (
           < React.Fragment >
            <h1> Resultados de busqueda </h1>
            <form onSubmit={(event) => this.preventDefault(event)}>
                <input placeholder="Buscar" onChange={(event => this.guardarCambios(event))} value={this.state.input} />
            </form>
            <section className="contenedor"> 
            {
                this.state.favoritos.map((unaPelicula, idx) => <UnaPelicula info={unaPelicula} key={idx} actualizar={(id) => this.actualizar(id)}/>)

    
            }
            </section>
        </React.Fragment>
        )
    }

}
export default Favoritos