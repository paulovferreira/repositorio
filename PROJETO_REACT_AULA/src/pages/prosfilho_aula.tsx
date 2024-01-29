
import Cabecalho from "../components/cabecalho";
import '../estilo/estilo.css';


type Props = {
    texto: String;
    onClickFN: (param: string) => void
}


function Filho(Prop: Props) {   

    function handleClick () {
        Prop.onClickFN('teste');
    }

    return(
        <div>   
            <br />
            <br />
            <hr />
            <h1>Início do elemento Filho</h1>
            O valor do meu parâmetro texto = {Prop.texto} 
            <br />
            <button onClick={handleClick}  > Clique Aqui! </button>


           
        </div>
    )
}


export default Filho;