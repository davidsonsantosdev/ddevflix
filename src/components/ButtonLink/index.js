import React from 'react';

function ButtonLink(props) {
   // props => { recebe a props da chamada}

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;





