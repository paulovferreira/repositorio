import Cabecalho from "../components/cabatividade";
import Comp1 from "../components/comp1";
import Comp2 from "../components/comp2";
import Comp3 from "../components/comp3";
import Comp4 from "../components/comp4";

function Atividade(){
    return(
        <div>
            <Cabecalho />
            <div className="atv-hor-container">
                <Comp1 />
                <Comp2 />
            </div>
            
            <div className="atv-ver-container">
                <Comp3 />
                <Comp4 />
            </div>

        </div>
    )
}

export default Atividade;