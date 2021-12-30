import React from 'react';
import  ReactDOM  from 'react-dom';

import  NavBar  from './components/NavBar';
import {Main1} from './components/Main1';
import { Main2 } from './components/Main2';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import Slogan from './components/Slogan';


ReactDOM.render (
    <React.StrictMode>
    <>
            <NavBar/>,
            <hr/>,
            <Main1/>,
            <hr/>
            <Main2/>,
            <hr/>
            <Cards/>,
            <hr/>
            <Slogan/>
            <hr/>
            <Footer/>,
    </>,
    </React.StrictMode>,
     document.querySelector('#root')
    );
