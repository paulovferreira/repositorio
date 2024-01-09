import { ChangeEvent, useState } from "react";
import { UsuariosFilmes } from "../types/usuariosFilmes";



function RequisicoesFilmes () {

    const [usuarios , setUsuarios] = useState<UsuariosFilmes[]>([]);

    const [addNomeText, setaddnomeText] = useState('');
    const [addIdadeText, setaddIdadeText] = useState('');
    const [addCidadeText, setaddCidadeText] = useState('');
    const [addEmailText, setaddEmailText] = useState('');
    const [addTelefoneText, setaddTelefoneText] = useState('');
    const [addSenhaText, setaddSenhaText] = useState('');
    
    const handleAddNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddnomeText(e.target.value)
    }
    
    const handleAddIdadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddIdadeText(e.target.value)
    }
    
    const handleAddCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddCidadeText(e.target.value)
    }
    
    const handleAddEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddEmailText(e.target.value)
    }
    
    const handleAddTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddTelefoneText(e.target.value)
    }
    
    const handleAddSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddSenhaText(e.target.value)
    }

    /* Função POST  */
    const HandleAddUsuarioClick = async () => {

        //Testes de validação se os dados estão preenchidos.
        if (addNomeText && addIdadeText) {
            
            let response = await fetch('https://localhost:3001/usuarios', 
                                        {
                                            // Por padrão, o method do fetch, é o GET, por isso não precisamos especificar.
                                            method: 'POST',
                                            body: JSON.stringify
                                            ({
                                                // campos requisitados pela API.
                                                nome: addNomeText,
                                                idade: parseInt(addIdadeText),
                                                cidade: addCidadeText,
                                                email: addEmailText,
                                                telefone: addTelefoneText,
                                                senha: addSenhaText
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
                alert('Post Adicionado com sucesso! id:' + json.id)     
                setUsuarios((usuarios) => [...usuarios, json] );

            } else {
                alert('Ocorreu alguma falha.')
            }


        } else {
            alert('Preencha as informações. ');
        }

    }

    return(
        <div>
            <h1>CADASTRO DE USUARIOS</h1>

            <input 
                value={addNomeText}
                type="text" 
                placeholder="Digite o nome"
                onChange={handleAddNomeChange} 
                /> 
            <br />
            <input 
                value={addIdadeText} 
                type="text" 
                placeholder="Digite a idade"
                onChange={handleAddIdadeChange} 
                /> 
            <br />
            <input 
                value={addCidadeText} 
                type="text" 
                placeholder="Digite a Cidade"
                onChange={handleAddCidadeChange} 
                />     

            <br />
            <input 
                value={addEmailText} 
                type="text" 
                placeholder="Digite o Email"
                onChange={handleAddEmailChange} 
                />         
            <br />
            <input 
                value={addTelefoneText} 
                type="text" 
                placeholder="Digite o Telefone"
                onChange={handleAddTelefoneChange} 
                />         
            <br />
            <input 
                value={addSenhaText} 
                type="text" 
                placeholder="Digite a senha"
                onChange={handleAddSenhaChange} 
                />                         
                <br /><br />

        <button onClick={HandleAddUsuarioClick}>  Adicionar  </button>

        <h1>Lista de Produtos</h1>
        <div>
            {usuarios.map((item, index) => (
                <div key={index} >                    
                    USER ID: {item.idade}
                    <br />
                    TÍTULO: {item.idade}                    
                    <br />                    
                    <hr />
                </div>

            ) )}
        </div>





                
        
        </div>
    )


}

export default RequisicoesFilmes;