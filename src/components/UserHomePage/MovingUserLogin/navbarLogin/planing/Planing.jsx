import React from 'react'

import './stylesPlaning.css'

export const Planing = () => {
    return (
         <div className='controlUserWeb'>
             <h1 className='titleUserWeb'>WORKOUTS</h1>
             <div className='squareWorkouts'>
                 {/* Card 1 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardFuerza.jpeg'/>
                     </div>
                     <div className="details">
                        <div className="center">
                         <h1>Peso Libre<span> Fuerza</span></h1>
                         <p>...</p>
                            <ul>
                                <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                         </div>
                    </div>
                 </div> 
                {/* Card 2 */}
                <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardBoxing.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Boxing:<span> Cardio</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 

                 {/* Card 3 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardKettle.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>KettleBell:<span> Funcional</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 

                 {/* Card 4 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardCrossfit.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Crossfit<span> Completo</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
                 {/* Card 5 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardPilates.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Pilates<span> Cuerpo y Mente</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
                 {/* Card 6 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardYoga.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Yoga<span> Cuerpo y Mente</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
                 {/* Card 7 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardRunning.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Running:<span>Cardio </span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
                 {/* Card 8 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardFuncional.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Functional Medio:<span> Completo</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
                 {/* Card 9 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardEstiramiento.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Flexibilidad<span> Estiramientos</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
                 {/* Card 10 */}
                 <div className="card">
                     <div className="image">
                        <img src='../img/ejercicioCardCoach.jpeg'/>
                     </div>
                     <div className="details">
                     <div className="center">
                        <h1>Coaching<span> Mentoring</span></h1>
                        <p>...</p>
                        <ul>
                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    </div>
                 </div> 
            </div> 
        </div>



    )
}