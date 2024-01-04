// Elemento criado para armazenar tudo que pertence ao form.

import { ChangeEvent, useState } from "react";


type Props = 
{
    onAdd: (title: string, body: string) => void;    
}


function FormPost({onAdd }: Props ) {

    // Criação das constantes para armazenar o valor a ser postado.
    // Como todo campo, para se editado, necessida de uma constnte.
    const [addTitleText, setaddTitleText] = useState('');
    const [addBodyText, setaddBodyText] = useState('');

      // FUNÇÕES PARA ALTERAR OS CAMPOS CRIADOS NA TELA.
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setaddTitleText(e.target.value)
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setaddBodyText(e.target.value)
    }

    const handleAddClick = () => {
        if (addTitleText && addBodyText ) {
            // Executo a função que está no pai
            onAdd(addTitleText, addBodyText);

        }else{
            alert('Preencha os campos');
        }

    }

    return (
        <div>
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
      </div>
    )
}

export default FormPost;