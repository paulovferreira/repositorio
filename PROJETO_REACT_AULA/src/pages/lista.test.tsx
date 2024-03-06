import Lista from './lista'; // importo o componente que quero testar
import {render, screen} from '@testing-library/react' 
                                                      

import{MemoryRouter} from  'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Testes com condicionais', () => {

    it('Encontrar Classe dos elementos + Condicionais', () => {
        
        const {container} = render(   // para encontrar a classe dos elementos, precisamos antes criar o elemento e armazenar seu HTML.
            <MemoryRouter>
                <Lista />
            </MemoryRouter>
        ); 

     //Primeiramente, testamos se possui uma lista de nomes.
    let testList = container.getElementsByClassName('itemNome')

    expect(testList.length) 
                .toBeGreaterThan(0);
                
    })

    // OBS. NÃO PODEMOS REUTILIZAR OS COMPONENTES RENDERIZADOS PARA MAIS DE UM TESTE.
    it('Testando se existem 3 nomes na lista de Nomes'), () => {
        
        // RENDERIZO NOVAMENTE O COMPONENTE.
        const {container} = render(   // para encontrar a classe dos elementos, precisamos antes criar o elemento e armazenar seu HTML.
        <MemoryRouter>
            <Lista />
        </MemoryRouter>
        );

        const ListaNomes = container.getElementsByClassName('itemNome');
        expect(ListaNomes.length).toBe(3) // verifica se tenho 3 itens na minha lista.
       
    } 
})

export{}