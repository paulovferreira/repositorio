import Cabecalho from "../components/cabecalho";
import '../estilo/estilo.css';
import Filho from "./prosfilho";



function PaiFilho() { 

    function ExecutarMetodoPai (Texto:string) {
        alert("Texto retornado: " + Texto);
    }

    return(
        <div>
            <Cabecalho />            
            <h1>Eu sou o Componente pai.</h1>            
            <Filho texto="Vai para o filho" onClickFN={ExecutarMetodoPai} />
            <br />
            <br />

            
            
           
        </div>
    )
}


export default PaiFilho;