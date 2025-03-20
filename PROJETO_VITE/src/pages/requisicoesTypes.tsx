import '../estilo/estilo.css'
import { useState, useEffect } from "react";
import Cabecalho from "../components/cabecalho";

//Importo o meu tipo a ser utilizado.
import { Produto } from "../types/produtos";

function RequisicoesTypes () {

    // Na declaração da minha constante, agora meu STATE será um Array de Movies
    const [produtos , setProdutos] = useState<Produto[]>([]);

    const[nome, setNome] = useState('');

    function AlertaEffect(){
        alert('Carregou a lista')
    }

  
    const carregarProdutos = () => {
            fetch("https://fakestoreapi.com/products")       
            .then((response) => {
                return response.json();
        })        
        .then((json) => {
            setProdutos(json);
        } )          

        //alert('Executou este processo');
    }   

  // UseEffects executa a função no momento em que a tela é aberta.
  useEffect( () => {    
        AlertaEffect();
    } , [] 
    );


    return (
    <div>
        <Cabecalho />
        
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>

        <hr /><br />        
        <button onClick={carregarProdutos}> Carregar Produtos </button>
        <br />        
        <button 
            onClick={() => {
                setNome('Professor Paulo')
        }  }>Setar nome</button>

        Total de produtos: {produtos.length}
        <br /><hr />

        
        <h1>Lista de Produtos</h1>
        <div>
            {produtos.map((item, index) => (
                <div key={index} >                    
                    <img src={item.image} className='products' />
                    <br />
                    TITULO DO ITEM: {item.title}
                    <br />
                    DESCRIÇÃO DO ITEM: {item.description}
                    <br />                    
                    <hr />
                </div>
            ) )}
        </div>



        <br /><hr />
        {/* <button> <Link to="../requisicoesTypesAsync">Ir para Requisições Assincronas</Link> </button> */}

     
    </div>
    )
}

export default RequisicoesTypes;