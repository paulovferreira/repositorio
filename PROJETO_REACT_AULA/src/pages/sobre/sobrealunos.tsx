import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router-dom";


function SobreAluno (){

return(
        <div>
            <Cabecalho titulo="home/SobreAlunos" />   
            <h1>Sobre ALUNOS</h1>

            <div className="container_menu">
            <ul className='ListaMenu'>
                <li><Link to="/sobrealuno/Paulo"> Paulo </Link></li>
                <li><Link to="/sobrealuno/Pedro"> Pedro </Link></li>
                <li><Link to="/sobrealuno/Tiago"> Tiago </Link></li>                                   
                <li><Link to="/sobrealuno/Joao"> João </Link></li>                                   
            </ul>
        </div>

        </div>
    )
}

export default SobreAluno;