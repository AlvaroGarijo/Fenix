import React from 'react';
import  ReactDOM  from 'react-dom';
import  NavBar  from './components/NavBar';


import './components/styles/NavBar.css'


const divRoot = document.querySelector('#fenixApp');

const Navbar =(
    <NavBar/>
)
ReactDOM.render (Navbar, divRoot);
