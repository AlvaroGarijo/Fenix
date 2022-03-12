import React from 'react';
import ReactDOM from 'react-dom';

import { MovingRouter } from './MovingRouter';
// import { UserLoginPages } from './UserLoginPages';


ReactDOM.render(
   //HomePage Renderizada
   <>
      <MovingRouter />

      {/* if()----condición si existe un token, llevar directamente a LOGIN */}
      {/* <PrivateRouter /> */}

   </>
   , document.querySelector('#root')
);
