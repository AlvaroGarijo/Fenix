import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// import { MovingRouter } from './MovingRouter';
import { UserLoginPages } from './UserLoginPages';



ReactDOM.render(
   //HomePage Renderizada
   <BrowserRouter>
   
     {/* <MovingRouter />  */}

      {/* if()----condición si existe un token, llevar directamente a LOGIN */}
    <UserLoginPages/>
    </BrowserRouter>
    ,document.querySelector('#root')
);
