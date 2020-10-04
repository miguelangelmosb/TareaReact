import React from 'react';
import ReactDOM from 'react-dom'
import Info from './informacion';
//import Apellido from './apellido';
//import Edad from './edad';


const rootApp = document.querySelector('#root-app');
const miNombre ='Miguel Angel';
const miApellido = 'Mosquera Balaguera';
const miEdad = 23;
;

ReactDOM.render(<Info nombre={miNombre} apellido={miApellido} edad={miEdad}/>, rootApp);
//ReactDOM.render(<Apellido apellido={miApellido}/>, rootApp);
//ReactDOM.render(<Edad edad={miEdad}/>, rootApp);

