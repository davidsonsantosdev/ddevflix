/**Bibliotecas */
import React from 'react';
import { Link } from 'react-router-dom';

/**Arquivos Estáticos */
import Logo from '../../assets/img/Logo.png';

/**Estilo do componente */
import './Menu.css';

/**Componentes */
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DDevFlixLogo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
