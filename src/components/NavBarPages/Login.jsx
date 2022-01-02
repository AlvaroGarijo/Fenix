import React from 'react'
import { Footer } from '../HomePage/Footer'

export const Login = () => {
    return (
        <div>
            <div>
                <img className="imgLogin" src="#" alt="imageLogin" />
                <div>
                    <label htmlFor="Usuario">Nombre de Usuario</label>
                    <input type="text" id="usuario" placeholder='Usuario' />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="clave" required />
                </div>
                <div>
                    <button type='button' className='loginStart' >Start</button>
                </div>
                <div>
                    <a href="#" id>Si no eres miembro, regístrate AQUI</a>
                    <a href="#" id>¿No recuerdas tu contraseña? Recuperala AQUI</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
