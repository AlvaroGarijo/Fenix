import React from 'react';
import './styles/Login.css'

export const Login = () => {
    return (
        <>
            <div className='orderLogin'>
                <div className='orderFirst'>
                    <img className='logoFenixLogin' src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-287.jpg?size=338&ext=jpg" alt="LogoFenix" />
                    <h2 className='family'>
                        ÚNETE A LA FAMILIA FÉNIX
                    </h2>
                </div >
                <div className='orderSecond'>
                    <form action="POST">

                        <div className="contentForm">
                            <div className="nameForm">
                                <span className="">Nombre: </span>
                                <input type="email" className="" name="Nombre" placeholder="Nombre" id="name" required />
                            </div>
                            <div className="lastNameForm">
                                <span className="">Apellidos: </span>
                                <input type="email" className="" name="Apellidos" placeholder="Apellidos" id="lastName" required />
                            </div>
                            <div className="emailForm">
                                <span className="">E-Mail</span>
                                <input type="email" className="" name="email" placeholder="Email" id="Correo" required />
                            </div>
                            <div className="passwordForm">
                                <span className="">Contraseña</span>
                                <input type="password" name="contra" className="" placeholder="******" required />
                            </div>
                            <div className="passwordFormConfirm">
                                <span className="">Confirma Contraseña</span>
                                <input type="password" name="contra" className="" placeholder="******" required />
                            </div>
                            <div className="phoneNumber">
                                <span className="">Teléfono: </span>
                                <input type="number" className="" name="Teléfono" placeholder="Teléfono" id="phoneNumber" required />
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="date" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Sobre Mi</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <label htmlFor="">¿Por qué Fenix Fit (Opcional)</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <p>
                                    <input type="checkbox" name="p1" value="1" />Acepto Términos y Condiciones
                                </p>
                                <button className="buttonForm" type="submit">Entrar</button>
                            </div>
                        </div >

                    </form >
                </div >
            </div >



        </>
    )
}
