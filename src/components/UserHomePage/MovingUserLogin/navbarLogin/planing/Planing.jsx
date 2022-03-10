import { FormLabel } from '@material-ui/core'
import React from 'react'
import { NavBarLogin } from '../NavBarLogin'
import './stylesPlaning.css'

export const Planing = () => {

    return (
        <div>
            <div className='orderTitlePlaning'>
                <h1 className='titlePlaning'>Planificación de Workouts</h1>
                <h2>Búsqueda de Usuario</h2>

            </div>
            <div className='squarePlaning'>
                <div className='squareTime'>
                    <h2>Usuario</h2>
                    <div className='internalUser'>

                        <div>Email</div>
                        <div>Fecha de Alta</div>
                        <div>Añadir Workut</div>
                    </div>
                </div>
                <div className='squareWork'>
                    <h2>Workouts</h2>
                    <div className='internalWork'>
                        <div>Tipo de Workout</div>
                        <div>Duración</div>
                        <div>Descripción Ejercicio</div>
                    </div>
                </div>
            </div>
        </div >
    )
}