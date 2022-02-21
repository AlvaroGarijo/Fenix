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
                        <Link to="/ToAddClient"><li>Añadir Usuario</li></Link>
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


        
                    <div>{/* CALENDARIO */}</div>

                    <div className='squareDates'>
                        <div className='squareDate'>
                            <div className='orderSquareDate'>
                                <div className='squareDay'>{/* dia 1 */} 
                                Lunes 1
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 1
                                 </div>
                            </div>
                         </div>

                        <div className='squareDate'>{/* dia 2 */}
                        <div className='orderSquareDate'>
                                <div className='squareDay'>
                                    {/* dia 2 */} Martes 2
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 2
                                 </div>
                            </div>
                        </div>
                        <div className='squareDate'>{/* dia 3 */} 
                        <div className='orderSquareDate'>
                                <div className='squareDay'>
                                    {/* dia 3 */} Miercoles 3
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 3
                                 </div>
                            </div>
                        </div>
                        <div className='squareDate'>{/* dia 4 */} 
                        <div className='orderSquareDate'>
                                <div className='squareDay'>
                                    {/* dia 4 */} Jueves 4
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 4
                                 </div>
                            </div>
                        </div>
                        <div className='squareDate'>{/* dia 5 */}
                        <div className='orderSquareDate'>
                                <div className='squareDay'>
                                    {/* dia 5 */} Viernes 5
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 5
                                 </div>
                            </div>
                         </div>
                        <div className='squareDate'>{/* dia 6 */}
                        <div className='orderSquareDate'>
                                <div className='squareDay'>
                                    {/* dia 1 */} Sábado 6
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 6
                                 </div>
                            </div>
                        </div>
                        <div className='squareDate'>{/* dia 7 */} 
                        <div className='orderSquareDate'>
                                <div className='squareDay'>
                                    {/* dia 7 */} Domingo 8
                                 </div>
                                  <div className='squareSession'>
                                     Leg Day + Run
                                     </div>
                            </div>
                            <div className='orderSquareDate2'>
                                <div className='squareNumber'> 
                                 8
                                 </div>
                            </div>
                        </div>

                    

                        <div>{/* PAGINACIÓN */} </div>
                    </div>



                        {/* LISTA DE USUARIOS */} 


                    <div className='orderUsersAndWorkoutTipes'>
                        <div className='squareLightblueUser'>   
                            <div className='userList' >USUARIO 1</div>
                            <div className='userList'>{/* User 2*/} </div>
                            <div className='userList'>{/* User 3*/} </div>
                            <div className='userList'>{/* User 4*/} </div>
                            <div className='userList'>{/* User 5*/} </div>
                            <div className='userList'>{/* User 6*/} </div>
                            <div className='userList'>{/* User 7   --- >  Cuando paga, avanzar*/} </div>
                            <div className='userList'>{/* User 8*/} </div>

                            <div>{/* PAGINACIÓN */} </div>
                        </div>
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
                    </div>

                </div>
            </div>
        </div>
    )
}
