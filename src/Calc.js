import React from 'react';
import './App.css';

function Calc(){
    return(
        <div className="app">
            <label htmlFor="num1">Primer Numero</label>
            <input name="num1" id="num1" type="text" />
            <label htmlFor="num2">Segundo Numero</label>
            <input name="num2" id="num2" type="text" />
            <label htmlFor="anc">Ancestro Comun Mas Cercano</label>
            <input name="anc" id="anc" type="text" />
        </div>
    );    
}

export default Calc;
