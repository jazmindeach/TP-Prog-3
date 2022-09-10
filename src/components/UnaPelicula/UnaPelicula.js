import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "./UnaPelicula.css"

class UnaPelicula extends Component{

        constructor (props){
            super(props) 
            this.state={
                    texto: "Ver más",
                    clase: "oculto"
            }
        }
    descripcion(){
        if(this.state.clase==="oculto"){

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
      render(){
          console.log(this.props)
          return(
                <React.Fragment> 
                    <Link> <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`}/></Link>
                   
                   <h2> {this.props.info.title}</h2>
                   <p className={this.state.clase}> {this.props.info.overview}</p>
                   <p onClick={()=> this.descripcion()}> {this.state.texto} </p>
                   <p> Agregar a favoritos </p>


                </React.Fragment>

          )
      } 


}

export default UnaPelicula