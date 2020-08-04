/**Bibliotecas */
import React from 'react';

/** Paginas relacionadas*/
import Menu from '../Menu';
import Footer from '../Footer';

//**Para estilizar no js precisar ser o ultimo import */
import styled, { css } from 'styled-components';

/**Estilo geral dos conteúdos dentro da tag <Main> */
const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 94px;
padding-left: 5%;
padding-right: 5%;
${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;


/**Com esta tecnica podemos manter o menu e footer nas páginas do
 * sistema sem termos que ficar repetindo o código, basta usar o
 * component <PageDefault> como no exemplo da chamada do botão de
 * novo vídeo. O conteúdo acaba vindo pela props e apresentamos ele
 * como abaixo, assim este componente pode se aproveitado em outras 
 * partes do sistema e utilizando a descontrução de objetos que vem
 * do ecmaScript 6 podemos apenas fazer como abaixo:
 * Antes function PageDefault(props) ..conteúdo {props.children}
 * e usando descontrução fica como abaixo.
 * 
 */
function PageDefault({ children, paddingAll }) {
    return (
        <>
            <Menu />
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;