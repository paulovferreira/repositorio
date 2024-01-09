import Cabecalho from "../components/cabecalho";
import '../estilo/estilo.css';
import {useState} from 'react';




function Contador() {
 
    const [numero, setNumero] = useState(1);
    const [nome, setNome] = useState(0);

    let contador: number = 1;

    function handleButtonClick () {
        setNumero(10);
        }
        

        function handleButtonClickMais () {
            setNumero(numero+1);
            }

            
            function handleButtonClickMenos () {
                setNumero(numero-1);
                }
        

    return(
        <div>
            <Cabecalho titulo="home/Contador" />   
            <h1>ESTE É MEU CONTADOR.</h1>

            O numero do meu contador é: {numero}

            <br />
            <br />
            <button onClick={handleButtonClick} > Incrementar </button>
            <button onClick={handleButtonClickMais} > Mais </button>
            <button onClick={handleButtonClickMenos} > Menos </button>
            <br />
        </div>
    )
}


export default Contador;