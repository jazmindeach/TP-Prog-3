import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import React from"react"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Notfound from './screens/Notfound/Notfound';
import Home from './screens/Home/Home';

function App() {
  
  return (
    <React.Fragment> 
    <header> <Header/> </header>

    <main> 
        <Switch> 
            <Route path="/" component={Home} exact={true}/>
            <Route path="" component={Notfound}/>
            
              
          
          
         




    </Switch> 

    </main>

    <footer> <Footer/> </footer>  
    </React.Fragment>

    
  )
}

export default App;
