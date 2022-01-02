import React from 'react';
import  ReactDOM  from 'react-dom';

import  NavBar  from './components/HomePage/NavBar';
import {Main1} from './components/HomePage/Main1';
import { Main2 } from './components/HomePage/Main2';
import { Footer } from './components/HomePage/Footer';
import { Cards } from './components/HomePage/Cards';
import Slogan from './components/HomePage/Slogan';


ReactDOM.render (
<React.StrictMode>
         <>
            <NavBar/>,
            <hr/>,
            <Main1/>,
            <Main2/>,
            <hr/>
            <Cards/>,
            <hr/>
            <Slogan/>
            <hr/>
            <Footer/>,
        </>
    </React.StrictMode>,
     document.querySelector('#root')
    );
