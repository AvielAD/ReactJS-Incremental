import React from 'react';

function Controlado(props){

    return(
        <React.Fragment>
            <h1>Hamburguesa</h1>
            <h3>Elige un Tamaño</h3>


            <ul>
                <li><input name="tamaño" value="chico" type="radio"/>chico</li>
                <li><input name="tamaño" value="mediano" type="radio"/>mediano</li>
                <li><input name="tamaño" value="grande" type="radio"/>grande</li>
            </ul>

            <h3>Elige un otro tipo</h3>
            <ul>
                <li><input name="tamaño" value="tipo 1" type="radio"/>chico</li>
                <li><input name="tamaño" value="tipo 2" type="radio"/>mediano</li>
                <li><input name="tamaño" value="tipo 3" type="radio"/>grande</li>
            </ul>

            <button>Aceptar</button>
        </React.Fragment>
    );

}

export default Controlado;