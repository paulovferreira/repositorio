import Cabecalho from './index'; // importo o componente que quero testar
import {render, screen} from '@testing-library/react' 
                                                      

import{MemoryRouter} from  'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Testes de busca de elementos por classes', () => {

    it('Encontrar Classe dos elementos', () => {
        
        const {container} = render(   // para encontrar a classe dos elementos, precisamos antes criar o elemento e armazenar seu HTML.
            <MemoryRouter>
                <Cabecalho />
            </MemoryRouter>
        ); 

        // Náo carrego o elemento com LET pois assim retornaria apenas um elemento.
        // Neste exemplo, queremos encontrar uma lista de componentes na mesma classe, quando houver.

    // container.getElementsByClassName('container_cabecalho') 
    // desta maneira retornamos a existencia de elementos que contenham essa classe.

    // PORÉM O RETORNO É UM ARRAY, pois podemos ter mais de um elemento dentro da mesma classe. ELEMENTS

    //Resolvemos colocando o teste de seu resultado dentro do EXPECT.
    expect(container.getElementsByClassName('cabecalho-container').length)
                .toBeGreaterThan(0);

    })
})

export{}