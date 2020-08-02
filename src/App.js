import React, { Co} from 'react';
import logo from './logo.svg';
import './App.css';

import Saludo from './components/saludo';

import MiComponente from './components/MiComponente'
import Contador from './components/2Contador';
import Operador from './components/3OperadorTernario';
import Matriz from './4Matriz';
import MatrizOperaciones from './5Matrizoperaciones';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="componentes">
      <MiComponente/>  <hr />
      <Saludo/>   <hr/>
      <Contador/> <hr/>
      <Operador/> <hr/>
      <Matriz />   <hr/>
      <MatrizOperaciones /> <hr/>
      
      </section>
    </div>
  );
}

export default App;
