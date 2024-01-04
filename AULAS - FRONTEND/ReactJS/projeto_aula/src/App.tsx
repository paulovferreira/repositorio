import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exemplo from './components/exemplo/exemplo';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';

function App() {
  return (
    <div>
        <Cabecalho />
        <Exemplo />
        <Rodape />
      


    </div>
    
  );
}

export default App;



/*
<div className="App">
      
      <header className="App-header">
        <Exemplo />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
*/ 