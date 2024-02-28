import FormPost from './index'; // importo o componente que quero testar
import {render, screen} from '@testing-library/react' // import para ter as funções de renderização e de
                                                      // busca na tela para poder realizar testes posteriormente.
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

it('Encontrar Home no Cabeçalho', () => {

    render(        
        <MemoryRouter>
            <FormPost onAdd={ () => {} } />        
        </MemoryRouter>
    ); // O render renderiza o componente. Monta o componente na memória.

    let button = screen.getByText('Adicionar');
    expect(button).toBeInTheDocument();

});




export{}