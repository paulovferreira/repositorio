import { useState, useEffect } from "react";
import Cabecalho from "../components/cabecalho";
import { Link } from "react-router-dom";

//Importo o meu tipo a ser utilizado.
import { Produto } from "../types/produtos";

function RequisicoesTypesAsync () {

        const [produtos , setProdutos] = useState<Produto[]>([]);

        const [loading, setLoading] = useState(false);

    useEffect(() => {
        // carregarProdutos();
    } , []);

    // Para tornar uma função assincrona preparada para esperar sua resposta antes de continuar a execução
    // do sistema, usando o termo sync na declaração da função, assim:

    const carregarProdutos = async () => {        
        setLoading(true);

        // Declara a var response separadamente para que possa aguardar o resultado de sua consulta
        let response = await fetch("https://fakestoreapi.com/products/1");
        // Declara a var json separadamente para que possa aguardar o json da requisição anterior ser preenchido
        let json = await response.json(); 

        // Tratamento para verificar se o array retornado possui mais de um item na API.
        const dataArray = Array.isArray(json) ? json: [json]
        setLoading(false);
        setProdutos(dataArray);

    
    }   
    return (
    <div>
        <Cabecalho />       

        <hr /><br />        

        {/* No carregamento dos elementos de tela, fazemos o tratamento para exibir ou não o conteúdo condicionalmente */}
        {loading && 
            <div>Carregando conteúdo ... </div>
        }

        {!loading &&
            <div>
                <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
                <button onClick={carregarProdutos}> Carregar Produtos </button>
                <br />
                Total de produtos: {produtos.length} 
             </div>
        }

        <br /><hr />
        <h1>Lista de Produtos</h1>
        <div>
            {produtos.map((item, index) => (
                <div key={index} >                    
                    <img src={item.image} className='products' />
                    {item.title}
                    <br />
                    {item.description}
                    <br />                    
                    <hr />
                </div>

            ) )}
        </div>

        <br /><hr />
        <button> <Link to="../requisicoesPost">Ir para Requisições Post</Link> </button>
    </div>
    )
}

export default RequisicoesTypesAsync;