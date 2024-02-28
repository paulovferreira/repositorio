import { useState, useEffect, ChangeEvent, useRef } from "react";
import Cabecalho from "../components/cabecalho";
import { Usuarios } from "../types/usuarios";
import FormPost from "../components/formpost";
import UsuarioItem from "../components/usuarioitem";
import { api } from "../api";
import ItemLista from "../components/itemlista";


function RequisicoesPostArquivo () {

        //Constantes
        const [usuarios , setUsuarios] = useState<Usuarios[]>([]);
        const [loading, setLoading] = useState(false);

        const [addTitleText, setaddTitleText] = useState('');
        const [addBodyText, setaddBodyText] = useState('');

        //CONSTANTES PARA CONTROLE DA IMAGEM E SUA LEGENDA.

        const fileInput = useRef<HTMLInputElement>(null)

        const [legenda, setLegenda] = useState('')

        const handleLegendaChange = (e: ChangeEvent<HTMLInputElement>) => {
            setLegenda(e.target.value)
        }

        const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setaddTitleText(e.target.value)
        }
    
    
        const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setaddBodyText(e.target.value)
        }  
   

    useEffect(() => {
        // carregarUsuarios();
    } , []);

    
    const carregarUsuarios = async () => {        
        setLoading(true);
        let json = await api.CarregarTodosUsuarios();       
        const dataArray = Array.isArray(json) ? json: [json]
        setLoading(false);
        setUsuarios(dataArray);    
    }   
    
    const handleAddPost = async () => {
            // ANTES DE ENVIAR A IMAGEM PRECISO VALIDAR SE ESSE INPUT CONTEM UMA IMAGEM ACEITA PELA MINHA API
            if(fileInput.current?.files && fileInput.current.files.length > 0) {
                //testando o conteudo:
                //console.log(fileInput.current.files)

                // Se ele existir, armazeno ele dentro de uma VAR para facilitar o uso posteriormente.
                const fileItem = fileInput.current.files[0];
                console.log(fileItem);
                //Neste momento ele já tem o binário do arquivo carregado.

                //Depois de verificar que o arquivo existe, precisamos validar seu tipo.
                /*PARA ISSO PRECISAREMOS VALIDAR OS MIME TYPES DOS ARQUIVOS.
                
                Normalmente para imagens temos:
                image/png
                image/jpg
                image/gif
                
                Posso então criar uma lista dos mimetypes aceitos:
                */ 
               const tiposPermitidos = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg']

               // após criar a lista, valido se o meu tipo está incluso na lista que eu criei.

               if(tiposPermitidos.includes(fileItem.type)){

                // é preciso criar um FORM DATA, um tipo de arquivo especial para encapsular o json
                const data = new FormData();
                data.append('image', fileItem);
                data.append('legenda', legenda);

                // TUDO CERTO, VOU ENVIAR O ARQUIVO.
                    let json = await api.AdicionarcomArquivo(data);
                    if (json.id) {
                    alert('Post Adicionado com sucesso!')     
                    setUsuarios((usuarios) => [...usuarios, json] );
                    } else {
                        alert('Falha ao adicionar usuário')
                    }       
               }else{
                alert('Arquivo incompatível')
               }
            }else{
                alert('Selecione um arquivo')
            }

         /*   let json = await api.AdicionarUsuarios(addTitleText, addBodyText, 1);
            if (json.id) {
                alert('Post Adicionado com sucesso!')     
                setUsuarios((usuarios) => [...usuarios, json] );
            } else {
                alert('Falha ao adicionar usuário')
            }        */
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
            <input placeholder="SELECIONE A IMAGEM" 
                   type="file"
                   ref={fileInput}>
                    
                   </input>
            <br />            
            <input placeholder="Informe uma descrição para sua imagem" 
                   type="text" 
                   value={legenda} onChange={handleLegendaChange} />
            <br />
            <button onClick={handleAddPost}>  Adicionar  </button> 
            <hr />
        </div>


        <br /><hr />
        <h1>Lista de Produtos</h1>
        <div>
      
            {usuarios.map((item, index) => (                
               <UsuarioItem data={item} />
            ) )}
        </div>

     
    </div>
    )
}

export default RequisicoesPostArquivo;