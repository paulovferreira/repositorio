import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";

function SobreDetalhe(){

    const Parametros = useParams();
    const navegacao = useNavigate();

    function HandleVoltar(){
        navegacao('/');
    }

    return(
        <div>
            <Cabecalho />
            O valor que estou recebendo via parametro da url é:
            {Parametros.nomealuno}

            <br /><br />
            <button onClick={HandleVoltar} >VOLTAR</button>    
            <Rodape />        

        </div>
    )
}


export default SobreDetalhe