import './estilo/estilo.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import SobreDetalhe from './pages/SobreDetalhe.tsx'
import Sobre from './pages/Sobre.tsx'
import Atividade from './pages/Atividade.tsx'
import Condicional from './pages/Condicional.tsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre/:nomealuno' element={<SobreDetalhe/>} />
      <Route path='sobre' element={<Sobre />} />
      <Route path='/atividade' element={<Atividade />} />
      <Route path='/condicional' element={<Condicional />} />
      

    </Routes>
  )
}

export default App
