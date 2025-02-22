import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import { useState } from "react";

function Sobre(){

    //let numero: number = 10;
    const [numero, setnumero] = useState(0);
    function handleClickButton(){        
        //numero += 10;        
        setnumero(numero + 10);
    }

    const [nome, setnome] = useState('');
    function HandleMudarNome(){
        setnome('Jhony')
    }

    return(
        <div>
            <Cabecalho />
            Sobre
            <br />
            O numero informado é: {numero}
            <br />
            <button onClick={handleClickButton}>Somar 10</button>
            <hr />
            Nome:
            <br />
            O meu nome não é: {nome}
            <br />
            <button onClick={HandleMudarNome}>Alterar Nome</button>
            <Rodape />
        </div>
    )
}

export default Sobre;