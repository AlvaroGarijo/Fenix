import React from 'react'
import './styles/Cards.css'

export const Cards = () => {
    return (
        <div>
            <h2>OFRECE EL MEJOR SERVICIO</h2>
            <div className='cards'>
                <div className='card'>
                    <img className='card-icon' src='./img/LogoPlaning.png' alt="planifica" />
                    <div className='card1-internal'>
                        <h4 className='letters'>
                            Planifica de forma fácil y eficaz
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src='./img/LogoWorkout.png' alt="workout" />
                    <div className='card2-internal'>
                        <h4 className='letters'>
                            Genera tus Workouts y envíalos a tus clientes
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src='./img/LogoChat.png' alt="contact" />
                    <div className='card3-internal'>
                        <h4 className='letters'>
                            Contacto directo con el cliente
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src='./img/LogoEvolution.png' alt="controlEvolution" />
                    <div className='card4-internal'>
                        <h4 className='letters'>
                            Controla la evolución de forma más regular
                        </h4>
                    </div>
                </div>


                <div className='card'>
                    <img className='card-icon' src='./img/LogoLibrary.png' alt="library" />
                    <div className='card5-internal'>
                        <h4 className='letters'>
                            Crea tu propia libreria de ejercicios
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src='./img/LogoPayment.png' alt="controlPayments" />
                    <div className='card6-internal'>
                        <h4 className='letters'>
                            Controla tus ingresos como nunca antes
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
