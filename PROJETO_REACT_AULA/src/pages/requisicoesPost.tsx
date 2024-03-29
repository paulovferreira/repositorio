import { useState, useEffect, ChangeEvent } from "react";
import Cabecalho from "../components/cabecalho";
import { Usuarios } from "../types/usuarios";


function RequisicoesPost () {

        //Constantes
        const [usuarios , setUsuarios] = useState<Usuarios[]>([]);
        const [loading, setLoading] = useState(false);

        // Criação das constantes para armazenar o valor a ser postado.
        // Como todo campo, para se editado, necessida de uma constnte.
        const [addTitleText, setaddTitleText] = useState('');
        const [addBodyText, setaddBodyText] = useState('');

    useEffect(() => {
        // carregarUsuarios();
    } , []);

    const carregarUsuarios = async () => {        
        setLoading(true);
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');    
        let json = await response.json(); 

        const dataArray = Array.isArray(json) ? json: [json]

        setLoading(false);
        setUsuarios(dataArray);    
    }   

    // FUNÇÕES PARA ALTERAR OS CAMPOS CRIADOS NA TELA.
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddTitleText(e.target.value)
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setaddBodyText(e.target.value)
    }

    const handleAddClick = async () => {
        // Testando se funcionou a criação dos campos e chamada de eventos.
        //alert( addTitleText + ' - ' + addBodyText);

        //Testes de validação se os dados estão preenchidos.
        if (addTitleText && addBodyText) {

            // Para o POST, a requisição é a mesma, via FETCH, no entanto, exite alguns parametros a mais.
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
                                        {
                                            // Por padrão, o method do fetch, é o GET, por isso não precisamos especificar.
                                            method: 'POST',
                                            body: JSON.stringify
                                            ({
                                                // campos requisitados pela API.
                                                title: addTitleText,
                                                body: addBodyText,
                                                userID: 1
                                            }),
                                            headers: {
                                                // Caso seja necessário o envio de algum parametro no cabeçalho da requisição, se faz aqui.
                                                'Content-Type': 'application/json'
                                            }                                        
                                        }
                                      );
            // Coleta o retorno do meu metodo post.                          
            let json = await response.json();
            
            // Exibe no log do console.
            console.log(json);

            // Após inserir as informações, posso inserir o resultado na minha lista.
            if (json.id){
                alert('Post Adicionado com sucesso!')     
                setUsuarios((usuarios) => [...usuarios, json] );

            } else {
                alert('Ocorreu alguma falha.')
            }


        } else {
            alert('Preencha as informações.');
        }




    }

    return (
    <div>
        <Cabecalho />       

        <hr /><br />                
        {loading && 
            <div>Carregando conteúdo ... </div>
        }

        {!loading &&
            <div>
                <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
                <button onClick={carregarUsuarios}> Carregar Usuários </button>
                <br />
                Total de Usuarios: {usuarios.length} 
             </div>
        }

        {/* CRIANDO OS ELEMENTOS PARA SEREM TRATADOS NA INSERÇÃO VIA POST. */}
        <div>
            <hr />
            <h2>Adicionar novo Post</h2>
            <br />
            <input 
                value={addTitleText} 
                type="text" 
                placeholder="Digite um Título"
                onChange={handleAddTitleChange} /> 
            <br />
            <br />
            <textarea 
            value={addBodyText} 
            onChange={handleAddBodyChange}></textarea>
            <br />
            <br />
            <button onClick={handleAddClick}>  Adicionar  </button>



            <hr />
        </div>

        <br /><hr />
        <h1>Lista de Produtos</h1>
        <div>
            {usuarios.map((item, index) => (
                <div key={index} >                    
                    USER ID: {item.userId}
                    <br />
                    TÍTULO: {item.title}                    
                    <br />                    
                    <hr />
                </div>

            ) )}
        </div>

     
    </div>
    )
}

export default RequisicoesPost;