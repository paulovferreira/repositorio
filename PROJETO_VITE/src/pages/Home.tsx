import { useContext } from 'react';
import Cabecalho from '../components/cabecalho'
import Rodape from '../components/rodape'
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Home() {

    let numero1: number = 5;    
    let numero2: number = 10;    
    
    function Somar(n1: number, n2:number): number{
        return n1 + n2;
    }   

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);



    function handleClick() {
        UsuarioLogadoCtx?.setName('PVFERREIRA'); 
    }
    
    return(
        <div>
            <Cabecalho titulo="Titulo Informado" 
                       pagina="Home Informada" 
                       parametro = "Parametro Informado" />

            Página Principal - Home
            <br />
            Variável 1 é: {numero1}
            <br />
            Variável 2 é: {numero2}
            <br />
            A soma é: {Somar(numero1, numero2)}
            <br />

            <button onClick={handleClick}>Clique aqui... </button>

            <br />
            <br />
            Usuario no Context: {UsuarioLogadoCtx?.name}
            
            <Rodape />

        </div>
    )
}

export default Home;