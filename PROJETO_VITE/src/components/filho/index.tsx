import '../../estilo/estilo.css'

type Comicacao_Props = {
    texto: String
    FN_Acao: () => void
}

function Filho(valores: Comicacao_Props){
   return(
        <div className='filho-container'>
            {valores.texto}
        <br />

        <button onClick={valores.FN_Acao}>Clique Aqui e Dispare a função do pai</button>

        </div>
    )
}

export default Filho;