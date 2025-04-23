import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cabecalho />
      <Rodape/>
   
    </div>
  )
}

export default App
