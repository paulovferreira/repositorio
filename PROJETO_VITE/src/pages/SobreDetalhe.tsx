import { useParams, useNavigate } from "react-router-dom"
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

function SobreDetalhe(){

    const QualquerCoisa = useParams();
    const navegacao = useNavigate();

    function HandleVoltar(){
        navegacao('/');
    }

    return(
        <div>
            <Cabecalho />
            O valor que estou recebendo via parametro da url é:
            {QualquerCoisa.nomealuno}

            <br /><br />
            <button onClick={HandleVoltar} >VOLTAR</button>    
            <Rodape />        

        </div>
    )
}


export default SobreDetalhe