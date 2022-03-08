import React from 'react';
import  ReactDOM  from 'react-dom';
import { UserLoginPages } from './components/UserLoginPages';
import { MovingRouter } from './MovingRouter';



ReactDOM.render (
//HomePage Renderizada
         <>
            {/* <MovingRouter/> */}

            {/* if()----condición si existe un token, llevar directamente a LOGIN */}
            <UserLoginPages/>
         </>
     ,document.querySelector('#root')
);
