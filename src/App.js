import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar'
import Logo from './components/Header/Logo'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carrito from './components/Carrito'

function App() {
  return (
    <div className="App">
     <Router>
      <Logo/>
     <Navbar/>
       <Switch>
         <Route exact path ="/"/>
         <Route exact path ="/tienda"/>
         <Route exact path ="/servicios"/>
         <Route exact path ="/contacto"/>
         <Route exact path ="/equipo"/>
         <Route exact path ="/carrito" component={Carrito}>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
