import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CalendarApp } from './calendar/CalendarApp'

export const Planing = () => {
    return (
        <BrowserRouter>
            <CalendarApp/>  
        </BrowserRouter>
        
    )
}
