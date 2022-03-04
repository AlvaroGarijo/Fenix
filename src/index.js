import React from 'react';
import  ReactDOM  from 'react-dom';
import   NavBar   from './components/HomePage/NavBar';
import { Footer } from './components/HomePage/Footer';
import  LineaDeRuta  from './components/AppRouter';
import { FreePageBar } from './components/HomePage/FreepageBar';


ReactDOM.render (
//HomePage Renderizada
         <>
            <FreePageBar/>,
            <NavBar/>,
            <LineaDeRuta/>
            <Footer/>,
        </>,

     document.querySelector('#root')
);
