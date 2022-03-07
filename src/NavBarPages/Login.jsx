import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css'

export const Login = () => {
    return (
        <>
            <div className='orderLogin'>
                <div className='orderFirst'>
                    <img className='imgGroup' src='./img/group2.jpeg' alt="LogoFenix" />
                    <h2 className='family'>
                        UNETE A LA FAMILIA FENIX
                    </h2>
                </div >
                <div className='orderSecond'>
                    <form className='formLogin' action="POST">
                        <div className="contentForm">
                            <div className="nameForm">
                                <span className="internalForm1">Nombre: </span>
                                <input type="text" className="internalForm2" name="Nombre" placeholder="Nombre" id="name" required />
                            </div>
                            <div className="lastNameForm">
                                <span className="internalForm1">Apellidos: </span>
                                <input type="text" className="internalForm2 " name="Apellidos" placeholder="Apellidos" id="lastName" required />
                            </div>
                            <div className="emailForm">
                                <span className="internalForm1">E-Mail</span>
                                <input type="email" className="internalForm2 " name="email" placeholder="Email" id="Correo" required />
                            </div>
                            <div className="passwordForm">
                                <span className="internalForm1">Contraseña</span>
                                <input type="password" name="contra" className="internalForm2 " placeholder="******" required />
                            </div>
                            <div className="passwordFormConfirm">
                                <span className="internalForm1">Confirma Contraseña</span>
                                <input type="password" name="contra" className="internalForm2 " placeholder="******" required />
                            </div>
                            <div className="phoneNumber">
                                <span className="internalForm1">Teléfono: </span>
                                <input type="text" className="internalForm2 " name="Teléfono" placeholder="Teléfono" id="phoneNumber" required />
                            </div>
                           


                            {/* IMPORTANTE CAMBIAR RUTAS DE LOGUEARSE */}


                            <div className='acceptConditionsOrder'>
                                <p className='acceptTerms'><input className='cuadrado' type="checkbox" name="p1" value="1" />   Acepto <span className='termCond'>Términos y Condiciones</span></p>
                                <Link to='/UserLoginHome'><button className="buttomForm" type="submit">Acepto</button></Link>
                            </div>
                        </div >

                    </form >
                </div >
            </div >



        </>
    )
}
