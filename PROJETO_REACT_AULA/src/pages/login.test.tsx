import Login from './login'; // importo o componente que quero testar
import {render, screen} from '@testing-library/react' // import para ter as funções de renderização e de
                                                      // busca na tela para poder realizar testes posteriormente.

import{MemoryRouter} from  'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

it('Encontrar Logar no Login', () => {

    render(        
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    ); // O render renderiza o componente. Monta o componente na memória.
       // Utilizamos o MemoryRouter quando precisamos olhar para um componente que é controlado pelo router.

    let button = screen.getByText('Logar');
    expect(button).toBeInTheDocument();

});


export{}