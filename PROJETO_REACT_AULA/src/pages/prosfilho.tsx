
import Cabecalho from "../components/cabecalho";
import '../estilo/estilo.css';


type Props = {
    texto: String;
    onClickFN: (Texto: string) => void;
}


function Filho(Parametro: Props) { 

    function handleClickButton() {
        // alert("Clicou no botão do filho.");
        Parametro.onClickFN("Texto enviado do FIlho para o pai")        
    }

    return(
        <div>   
            <br />
            <br />
            <hr />
            <h1>Início do elemento Filho</h1>
            O valor do meu parâmetro texto = {Parametro.texto}
            <br /> <br />
            <button onClick={handleClickButton}> Exibir valor  </button>

           
        </div>
    )
}


export default Filho;