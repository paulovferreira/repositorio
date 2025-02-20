import Cabecalho from '../components/cabecalho'
import Rodape from '../components/rodape'

function Home() {

    let numero1: number = 5;    
    let numero2: number = 10;    
    
    function Somar(n1: number, n2:number): number{
        return n1 + n2;
    }   
    
    return(
        <div>
            <Cabecalho titulo="Titulo Informado" 
                       pagina="Home Informada" 
                       parametro = "Parametro Informado" />

            Página Principal - Home
            <br />
            Variável 1 é: {numero1}
            <br />
            Variável 2 é: {numero2}
            <br />
            A soma é: {Somar(numero1, numero2)}




            
            <Rodape />

        </div>
    )
}

export default Home;