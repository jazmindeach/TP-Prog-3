import React, {Component} from 'react'
import UnaPelicula from '../UnaPelicula/UnaPelicula'
import { Link } from 'react-router-dom'

class Listado extends Component{

        constructor (props){
            super(props) 
            this.state={
                    datos:[]
            }
        }
    componentDidMount(){
        fetch(this.props.populares ? `https://api.themoviedb.org/3/movie/popular?api_key=627cbec155d5e3d21e03021421fffc3a`: `https://api.themoviedb.org/3/movie/now_playing?api_key=627cbec155d5e3d21e03021421fffc3a`)
                    .then(response=>response.json())
                    .then(data=> {
                        {this.setState({datos: data.results})}
                        console.log(data)
                    })
                    .catch(error=>console.log('El error fue: ' + error))
    }

      render(){
          return(
                <React.Fragment> 
                    <h1> {this.props.populares ? "Peliculas Populares": "Películas en cartelera" } </h1>
                       
                    {this.state.datos === [] ? <h3>Cargando ...</h3> : 
                         this.state.datos.map((unaPelicula,idx)=> <UnaPelicula info={unaPelicula} key={idx}/>)
                    
                    }
                    <h2><Link to={this.props.populares ? "/populares": "/cartelera" }>  Ver todas las {this.props.populares ? "Peliculas Populares": "Películas en cartelera" }</Link></h2>

                </React.Fragment>

          )
      } 


}

export default Listado