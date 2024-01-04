
type Props =  {
    dados: {
        name: string;
        age: string;
    }
}

function ItemLista ({dados}: Props) {
    return(
        <li>Nome: {dados.name} - Idade: {dados.age}</li>
    )
}

export default ItemLista;

