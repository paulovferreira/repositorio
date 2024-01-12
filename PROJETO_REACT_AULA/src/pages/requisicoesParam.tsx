import { useState, useEffect, ChangeEvent } from "react";
import Cabecalho from "../components/cabecalho";
import { Usuarios } from "../types/usuarios";
import FormPost from "../components/formpost";
import UsuarioItem from "../components/usuarioitem";
import { api } from "../api";
import ItemLista from "../components/itemlista";


function RequisicoesParam () {

        //Constantes
        const [usuarios , setUsuarios] = useState<Usuarios[]>([]);
        const [loading, setLoading] = useState(false);
        const [paramBusca, setparamBusca] = useState('');

    useEffect(() => {
        // carregarUsuarios();
    } , []);

    // PROFISSIONALIZANDO O USO DAS APIS
    const carregarUsuarios = async () => {        
        
        if (paramBusca) {
            setLoading(true);
            let json = await api.CarregarUsuarioUnico(paramBusca);       
            const dataArray = Array.isArray(json) ? json: [json]
            setLoading(false);
            setUsuarios(dataArray);    

        }   else {
            setLoading(true);
            let json = await api.CarregarTodosUsuarios();       
            const dataArray = Array.isArray(json) ? json: [json]
            setLoading(false);
            setUsuarios(dataArray);    
        }
    }   

    // No momento da requisição da tela, será necessário enviar o evento de adição  
    // POST para o componente vida Props para que ele execute o chamado a partir d pai.
    const handleAddPost = async (title: string, body: string) => {
            let json = await api.AdicionarUsuarios(title, body, 1);
            if (json.id) {
                alert('Post Adicionado com sucesso!')     
                setUsuarios((usuarios) => [...usuarios, json] );
            } else {
                alert('Falha ao adicionar usuário')
            }        
        }   
        
    const handleParamBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
            setparamBusca(e.target.value)
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
                <input type="text"
                value={paramBusca}
                onChange={handleParamBuscaChange} />

                <button onClick={carregarUsuarios}> Carregar Usuários </button>
                <br />
                Total de Usuarios: {usuarios.length} 
             </div>
        }      
        {/* PROFISSIONALIZANDO FORMS - Evento enviado via PROP. */}
        <FormPost onAdd={handleAddPost} />

        <br /><hr />
        <h1>Lista de Produtos</h1>
        <div>

            {usuarios.map((item, index) => (                
                <div>
                ID: {item.id}
               <br />
               USER: {item.title}
               </div>
            ) )} 

            {/* PROFISSIONALIZANDO EXIBIÇÃO
            {usuarios.map((item, index) => (                
               <UsuarioItem data={item} />
            ) )} */}
        </div>

     
    </div>
    )
}

export default RequisicoesParam;