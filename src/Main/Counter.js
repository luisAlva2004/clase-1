import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import clase from './css/textStyle.css';
import div from './css/buttonStyle.css';

function Counter({ datos }) {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div class={clase}>
            <p> Contador: {contador}</p>
            <div class={div}>
            <Button variant="primary" onClick={incrementarContador}>CLICK</Button>
            </div>
            {datos.map((dato) => (
                <h1> {dato} </h1>
                
            ))}
        </div>
    );
}

export default Counter;