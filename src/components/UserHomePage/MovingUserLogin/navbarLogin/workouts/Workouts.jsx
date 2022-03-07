import React from 'react'
import './stylesWorkouts.css'

export const Workouts = () => {
    return (
        
        <div className='squareLightblueWorkouts'>
             <div className='workoutsTitle'> WORKOUTS</div>
             <div className='activity'> CARRERA </div>
             <div className='activity'> PESO LIBRE </div>
             <div className='activity'> PILATES </div>
             <div className='activity'> FUNCTIONAL TRAINING </div>

             <div className='orderAddInput'>
            <input className='addInput' type="text" name="añadir" id="" placeholder='Añade Workout' />
            <button className='addButton'>Añadir</button>
             </div>
        </div>
    )
}
