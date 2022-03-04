import React from 'react'
import { Main1 } from '../components/HomePage/Main1';
import { Main2 } from '../components/HomePage/Main2';
import { Cards } from '../components/HomePage/Cards';
import { Slogan } from '../components/HomePage/Slogan';
import { Main2A } from '../components/HomePage/Main2A';


export const Home = () => {
    return (
        <div>
        
            <Main1 />,
            <Main2 />,
            <Cards />,
            <Main2A />
            <Slogan />
        </div>
    )
}
