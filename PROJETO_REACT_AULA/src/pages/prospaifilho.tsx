import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import '../estilo/estilo.css';
import Filho from "./prosfilho";



function PaiFilho() { 

    const [Texto, setTexto] = useState('');


    function ExecutarMetodoPai (Texto:string) {
        alert("Texto retornado: " + Texto);
    }

    function handleChangeTexto (event: React.ChangeEvent< HTMLInputElement >) { 
        setTexto(event.target.value); 
    }


    return(
        <div>
            <Cabecalho />            
            <h1>Eu sou o Componente pai.</h1> 
            <br />
            <hr />
            <input type="text" placeholder="Informe o texto a ser enviado" onChange={handleChangeTexto} />
            <hr />
            <br />

            <Filho texto={Texto} onClickFN={ExecutarMetodoPai} />
            <br />
            <br />            
            
           
        </div>
    )
}


export default PaiFilho;