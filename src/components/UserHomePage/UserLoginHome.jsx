import React from 'react'
import { Link } from 'react-router-dom'
import './styleUserLogin/stylesUserLoginHome.css';

export const UserLoginHome = () => {
    return (
        <div>
            <div className='orderWrapp'>
                <div className='NavBarUser'>
                    <img className='imgUserLog' src="https://f.rpp-noticias.io/2019/02/15/753300descarga-11jpg.jpg" alt="" />
                    <div className='nameUser'>Nombre y Apellidos</div>
                    <div className='listUserLog'>
                        <Link to="/Planing"><li>Planifica</li></Link>
                        {/* <Link to="/UserList"><li>Usuaruios</li></Link> */}
                        <Link to="Library"><li>Libreria</li></Link>
                        <Link to="Evolution"><li>Evolución</li></Link>
                        <Link to="Payments"><li>Pagos</li></Link>
                        <Link to="Chat"><li className='chat' >Chat</li></Link>
                    </div>
                    <img className='imgLogoFenix' src='https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-287.jpg?size=338&ext=jpg' alt="LogoFenix" />
                    <h3>Fenix Fit</h3>
                </div>
                <div className='controlUserWeb'>
                    <div>{/* Componente calendario */}</div>
                    <div className='cuadroCelesteDate'>
                        <div>{/* dia 1 */} </div>
                        <div>{/* dia 2 */} </div>
                        <div>{/* dia 3 */} </div>
                        <div>{/* dia 4 */} </div>
                        <div>{/* dia 5 */} </div>
                        <div>{/* dia 6 */} </div>
                        <div>{/* dia 7 */} </div>

                        <div>{/* PAGINACIÓN */} </div>
                    </div>
                    <div className='orderUsersAndWorkoutTipes'>
                        <div className='cuadroCelesteUser'>
                            <div>{/* User 1*/} </div>
                            <div>{/* User 2*/} </div>
                            <div>{/* User 3*/} </div>
                            <div>{/* User 4*/} </div>
                            <div>{/* User 5*/} </div>
                            <div>{/* User 6*/} </div>
                            <div>{/* User 7   --- >  Cuando paga, avanzar*/} </div>
                            <div>{/* User 8*/} </div>

                            <div>{/* PAGINACIÓN */} </div>
                        </div>
                        <div className='cuadroCelesteWorkouts'>
                            <div> {/* 4 divs para añadir una opción */}  </div>
                            <input type="text" name="" id="" placeholder='Añadir' />
                            <button>Añadir</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
