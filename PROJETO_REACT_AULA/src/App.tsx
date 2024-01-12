//import './App.css';
import './estilo/estilo.css'
import React, { createElement } from "react";
// import './estilo/estilo.css'
//import Resultado from './components/resultado';
import Cabecalho from './components/cabecalho/index';
//import Rodape from './components/rodape/index';
//import Menu from './components/menu';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/About';
import SobreAluno from './pages/sobre/sobrealunos';
import SobreDirecao from './pages/sobre/sobredirecao';
import SobreProfessor from './pages/sobre/sobreaprofessor';
import SobreItemAluno from './pages/sobre/sobreitemaluno';
import Lista from './pages/lista';
import Strap from './pages/reactstrap';
import Login from './pages/login';
import Requisicoes from './pages/requisicoes';
import RequisicoesTypes from './pages/requisicoesTypes';
import RequisicoesTypesAsync from './pages/requisicoesTypesAsync';
import RequisicoesPost from './pages/requisicoesPost';
import RequisicoesParam from './pages/requisicoesParam';
import RequisicoesPostRefact from './pages/requisicoesPostRefact';
import RequisicoesFilmes from './pages/requisicoesFilmes';
import PaiFilho from './pages/prospaifilho';
import { UsuarioLogadoProvider } from './contexts/contextAuth';
import Condicional from './pages/Condicional';


function App(){
  return(
    <div>          
      <hr />
      <div>
        <UsuarioLogadoProvider>
          <Routes>          
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/sobrealuno" element={<SobreAluno />} />
            <Route path="/sobredirecao" element={<SobreDirecao />} />
            <Route path="/sobreprofessor" element={<SobreProfessor />} />
            <Route path="/sobrealuno/:parametro" element={<SobreItemAluno/> } />
            <Route path="/lista" element={<Lista/> } />
            <Route path="/strap" element={<Strap/> } />
            <Route path="/requisicoes" element={<Requisicoes/> } />
            <Route path="/requisicoestype" element={<RequisicoesTypes/> } />
            <Route path="/requisicoesTypesAsync" element={<RequisicoesTypesAsync/> } />
            <Route path="/requisicoesPost" element={<RequisicoesPost/> } />
            <Route path="/requisicoesParam" element={<RequisicoesParam/> } />
            <Route path="/requisicoesRefact" element={<RequisicoesPostRefact/> } />
            <Route path="/requisicoesFilmes" element={<RequisicoesFilmes/> } />
            <Route path="/paifilho" element={<PaiFilho/> } />
            <Route path="/condicional" element={<Condicional/> } />


          </Routes>
        </UsuarioLogadoProvider>  
      </div>
      <hr />
    <footer>
      Todos os Direitos Reservados
    </footer>
    </div>
  )
}

export default App;


/*
/* <Resultado descricao='TESTANDO PROPS' textopadrao='TEXTO PADRÃO' naoobr='Esse parâmetro não é obrigatório' />      

function App() {

  return (
     React.createElement('Div', null, 'TESTE DE DIV COM REACT')
  );
}


function App() {
  return(
    <div>teste de div para com JSX</div>
  )
}*/

/*
function App() {  
  return(React.createElement('a', {href:"https://google.com.br", target:"_blank"}, 'VAI PRO GOOGLE!')

    /* Equivalente a 
    return (< a href="https://google.com.br" > VAI PRO GOOGLE!)
    
  );
}  */


/*
const Cabecalho = () =>{
  return(
    <div >
      <header className='cabecalho'> 
        <Menu />

      </header>
    </div>
  )
};

const Rodape = () =>{
  return(
    <div > 
      <footer className='rodape'> Rodape da página </footer>
    </div>
  )
};*/


