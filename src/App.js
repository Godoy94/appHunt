import React, {Component} from 'react';
import Routes from './routes';

import './estilos.css'

import Header from './components/Header';
import main from './pages/main';

const App = () =>(
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;