import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import { MovingRouter } from './MovingRouter';
import { UserLoginPages } from './UserLoginPages';



ReactDOM.render(
  
   
     <MovingRouter /> 

   
    ,document.querySelector('#root')
);
