import './App.css';
import './components/Estilos.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import React, { Component, Fragment, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function App() {

return (
<BrowserRouter>
  <Switch>
    <Route path='/'>     
      <Navbar/>
      <ItemListContainer/>
    </Route>    
  </Switch>
   </BrowserRouter>
  );
}

export default App;
