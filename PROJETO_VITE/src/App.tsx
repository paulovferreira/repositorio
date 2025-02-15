import './estilo/estilo.css'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import SobreDetalhe from './pages/SobreDetalhe.tsx'
import Sobre from './pages/Sobre.tsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre/:nomealuno' element={<SobreDetalhe/>} />
      <Route path='sobre' element={<Sobre />} />
    </Routes>
  )
}

export default App
