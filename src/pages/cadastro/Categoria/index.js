/**Bibliotecas */
import React from 'react';

/**Components */
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>


            <Link to="/">
             Ir para a Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;