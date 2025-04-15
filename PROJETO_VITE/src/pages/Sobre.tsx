import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import { useContext, useState } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Sobre(){

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

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
            <hr />
            <br />
            Usuário presente no contexto é: {UsuarioLogadoCtx?.name}
            <br />
            <hr />
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