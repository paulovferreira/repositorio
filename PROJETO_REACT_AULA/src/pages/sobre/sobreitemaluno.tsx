import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";

function SobreItemAluno (){
    const params = useParams();
    const navegacao = useNavigate();

    function handleBack() {
        navegacao(-1);
    }

    function handleHome() {
        navegacao('/');
    }

return(    
        <div>
            <Cabecalho titulo={'home/SobreAlunos/' + params.parametro}  />     
            <h1>Sobre ITEM ALUNOS</h1>
            <hr />
            <p>
                Esta é uma página sobre o aluno: {params.parametro}
            </p>
            <hr />
            <br />
            <button onClick={handleBack}> VOLTAR </button> 
            <br />
            <button onClick={handleHome}>VOLTAR PARA HOME</button>

        </div>
    )
}

export default SobreItemAluno;