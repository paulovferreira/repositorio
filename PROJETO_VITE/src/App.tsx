import './estilo/estilo.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import SobreDetalhe from './pages/SobreDetalhe.tsx'
import Sobre from './pages/Sobre.tsx'
import Atividade from './pages/Atividade.tsx'
import Condicional from './pages/Condicional.tsx'
import Comunicacao from './pages/Comunicacao.tsx'
import Requisicoes from './pages/requisicoes.tsx'
import RequisicoesTypes from './pages/requisicoesTypes.tsx'
import { UsuarioLogadoProvider } from './contexts/contextAuth';
import Strap from './pages/reactstrap.tsx'
import Effects from './pages/effects.tsx'

function App() {

  return (
    <UsuarioLogadoProvider>
      <Routes>      
            <Route path='/' element={<Home/>} />
            <Route path='/sobre/:nomealuno' element={<SobreDetalhe/>} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='/atividade' element={<Atividade />} />
            <Route path='/condicional' element={<Condicional />} />
            <Route path='/comunicacao' element={<Comunicacao />} />
            <Route path='/requisicoes' element={<Requisicoes />} />
            <Route path='/requisicoestypes' element={<RequisicoesTypes />} />          
            <Route path='/strap' element={<Strap />} />   
            <Route path='/effect' element={<Effects />} />   

      </Routes> 
    </UsuarioLogadoProvider>
  )
}

export default App
