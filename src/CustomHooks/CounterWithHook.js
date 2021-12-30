import React from 'react'
import { useCounter } from './useCounter'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Cart : {state}</h1>
            <hr/>
            <button onClick={increment} className='increment'>Aumenta + 1</button>
            <button onClick={decrement} className='decrement'>Disminuye - 1</button>
            <button onClick={reset} className='reset'>Reset</button>
        </>
    )
}
