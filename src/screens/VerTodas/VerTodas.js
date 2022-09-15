import React,{Component} from "react"
import { Link } from "react-router-dom"
import Listado from "../../components/Listado/Listado"

class VerTodas extends Component {
    constructor (props){
        super(props)
        this.state = { tipo:props.match.params.tipo}
    }
     render() {
        return (
    
            <React.Fragment>
                <h1> {this.state.tipo} </h1>

            </React.Fragment>
        )
    
    }
}

export default VerTodas