import React from 'react'
import './styles/Cards.css'

export const Cards = () => {
    return (
        <div>
            <h2 className='titleHomeCard'>OFRECE EL MEJOR SERVICIO</h2>
            <div className='cardsHome'>
                <div className='cardHome'>
                    <img className='card-iconHome' src='./img/LogoPlaning.png' alt="planifica" />
                    <div className='card1-internalHome'>
                        <h4 className='lettersHome'>
                            Planifica de forma fácil y eficaz
                        </h4>
                    </div>
                </div>

                <div className='cardHome'>
                    <img className='card-iconHome' src='./img/LogoWorkout.png' alt="workout" />
                    <div className='card2-internalHome'>
                        <h4 className='lettersHome'>
                            Genera tus Workouts y envíalos a tus clientes
                        </h4>
                    </div>
                </div>

                <div className='cardHome'>
                    <img className='card-iconHome' src='./img/LogoChat.png' alt="contact" />
                    <div className='card3-internalHome'>
                        <h4 className='lettersHome'>
                            Contacto directo con el cliente
                        </h4>
                    </div>
                </div>

                <div className='cardHome'>
                    <img className='card-iconHome' src='./img/LogoEvolution.png' alt="controlEvolution" />
                    <div className='card4-internalHome'>
                        <h4 className='lettersHome'>
                            Controla la evolución de forma más regular
                        </h4>
                    </div>
                </div>


                <div className='cardHome'>
                    <img className='card-iconHome' src='./img/LogoLibrary.png' alt="library" />
                    <div className='card5-internalHome'>
                        <h4 className='lettersHome'>
                            Crea tu propia libreria de ejercicios
                        </h4>
                    </div>
                </div>

                <div className='cardHome'>
                    <img className='card-iconHome' src='./img/LogoPayment.png' alt="controlPayments" />
                    <div className='card6-internalHome'>
                        <h4 className='lettersHome'>
                            Controla tus ingresos como nunca antes
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
