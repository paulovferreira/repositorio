import  '../../estilo/estilo.module.css'
import { Link } from 'react-router-dom';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { useState } from 'react';

function Menu () {

    const [ativo, setAtivo] = useState(true);
    const toggle = () => setAtivo( false );

    return (
<div>

{/* <ul className='ListaMenu'>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/sobrealuno"> Sobre Alunos </Link></li>
                <li><Link to="/sobreprofessor"> Sobre Professores </Link></li>
                <li><Link to="/sobredirecao"> Sobre Diretoria </Link></li>                                   
                <li><Link to="/lista"> Lista</Link></li>        
                <li><Link to="/strap"> Bootstrap </Link></li>        
            </ul> */}


        <div>

            <Nav    card
                    justified
                    pills                    
                    >
                    <NavItem   >
                        <NavLink > <Link to="/"> Home </Link> </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink> <Link to="/sobrealuno"> Sobre Alunos </Link> </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' > <Link to="/sobreprofessor"> Sobre Professores</Link> </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink > <Link to="/sobredirecao"> Sobre Diretoria</Link> </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink > <Link to="/lista"> Lista </Link> </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink > <Link to="/strap"> Bootstrap </Link> </NavLink> 
                    </NavItem>
                    
                    </Nav>
        </div>   
        </div>
    )
}

export default Menu;

