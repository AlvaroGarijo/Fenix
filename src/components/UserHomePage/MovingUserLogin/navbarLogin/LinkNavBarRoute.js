import React from 'react'
import { Routes, Route } from 'react-router'
import { Clients } from './clients/Clients'
import { NavBarLogin } from './NavBarLogin'
import { ToAddClient } from './newUser/ToAddClient'
import { Planing } from './planing/Planing'
import { Workouts } from './workouts/Workouts'

export const LinkNavBarRoute = () => {
    return (
        <Routes>
            <Route path="/Planing" element={<Planing />} />
            <Route path="/Workouts" element={<Workouts />} />
            <Route path="/ToAddClient" element={<ToAddClient />} />
            <Route path="/Clients" element={<Clients />} />
        </Routes>
    )
}

