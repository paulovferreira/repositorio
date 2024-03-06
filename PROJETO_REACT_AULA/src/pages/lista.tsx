import Cabecalho from "../components/cabecalho";
import ItemLista from "../components/itemlista";

import { useContext } from "react";
import { Context } from "../contexts/context";

function Lista () {

    const {nome, idade} = useContext(Context);

    let list = [
        'Paulo',
        'Camila',
        'Maria',
        'Cecilia'
    ]

    let listObj = [
        {name: 'Nome 1', age: '30' },
        {name: 'Nome 2', age: '30' },
        {name: 'Nome 3', age: '30' },
        {name: 'Nome 4', age: '30' },
        {name: 'Nome 5', age: '30' },
    ]
    
    return (
    <div>
        <Cabecalho titulo="home" />        

        Teste de acesso do {nome} que tem idade = {idade} anos
        <br />
        <hr />
        <br />
        

        <h2 className="listaNomes">Lista de Nomes</h2>
        <ul>
            {list.map((item)=>(
                <li className="itemNome">{item}</li>
            ))}
        </ul>

        <br />

        <h2 className="ListaObj">Lista de Objetos</h2>

        <ul>
            {listObj.map((item, index)=>(
                <li key={index}> Nome {item.name} - {item.age} Anos</li>
            ))}
        </ul>


        <h2>Lista componentizada. </h2>

        <ul>
            {listObj.map((item, index)=>(
                <ItemLista key={index} dados={item} />             
            ))}
        </ul>

        <br />
        <br />
        <hr />        
    </div>
    )
}

export default Lista;