import React from 'react';
import { Button as BUTTON } from 'react-bootstrap';
import './Button.css';

const Button = (props) => {
    return (
        <BUTTON
            variant={props.variant}
            className='button'
            onClick={props.clickHandler}
        >
            {props.children}
        </BUTTON>
    );
}

export default Button;