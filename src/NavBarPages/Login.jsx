import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Login.css'

export const Login = () => {
    return (
        <>
            <div className='orderLogin'>
                <div className='Login'>
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
                        <Link to="#">Si no eres miembro, regístrate AQUI </Link>
                        <Link to="#">¿No recuerdas tu contraseña? Recuperala AQUI</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
