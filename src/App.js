import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import React from"react"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Notfound from './screens/Notfound/Notfound';
import Home from './screens/Home/Home';
import Populares from './screens/Populares/Populares';
import Cartelera from './screens/Cartelera/Cartelera';
import Favoritos from './screens/Favoritos/Favoritos';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';

function App() {
  
  return (
    <React.Fragment> 
    <header> <Header/> </header>

    <main> 
        <Switch> 
            <Route path="/" component={Home} exact={true}/>
            <Route path="/populares" component={Populares} exact={true} /> 
            <Route path="/cartelera" component={Cartelera} exact={true}/> 
            <Route path="/favoritos" component={Favoritos} exact={true}/>
            <Route path="/detallePelicula/id/:id" component={DetallePelicula} />
            <Route path="" component={Notfound}/>
            
          
          
         
        </Switch> 

    </main>

    <footer> <Footer/> </footer>  
    </React.Fragment>

    
  )
}

export default App;
