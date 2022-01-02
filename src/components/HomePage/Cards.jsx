import React from 'react'
import './styles/Cards.css'

export const Cards = () => {
    return (
        <div>
            <div className='container'>
                <title className='title'>OFRECE EL MEJOR SERVICIO</title>
                <div className='card-container'>
                    <div className='card1'>
                        <img className='card1-icon' src="https://cdn-icons-png.flaticon.com/512/6442/6442081.png" alt="planifica" />
                        <div className='card1-internal'>
                            <h4 className='letters'>
                                Planifica de forma fácil y eficaz
                            </h4>
                        </div>
                    </div>

                    <div className='card2'>
                        <img className='card2-icon' src="https://cdn-icons-png.flaticon.com/512/6183/6183784.png" alt="workout" />
                        <div className='card2-internal'>
                            <h4 className='letters'>
                                Genera tus Workouts
                            </h4>
                        </div>
                    </div>

                    <div className='card3'>
                        <img className='card3-icon' src="https://cdn-icons-png.flaticon.com/512/5716/5716227.png" alt="contact" />
                        <div className='card3-internal'>
                            <h4 className='letters'>
                                Contacto directo con el cliente
                            </h4>
                        </div>
                    </div>

                    <div className='card4'>
                        <img className='card4-icon' src="https://cdn-icons-png.flaticon.com/512/1270/1270333.png" alt="controlEvolution" />
                        <div className='card4-internal'>
                            <h4 className='letters'>
                                Controla la evolución de tus clientes
                            </h4>
                        </div>
                    </div>
                </div>

                <div className='card5'>
                    <img className='card5-icon' src="https://cdn-icons.flaticon.com/png/512/5444/premium/5444182.png?token=exp=1640848789~hmac=4521aa20412e1a5d115054e6a5f7c79d" alt="librery" />
                    <div className='card5-internal'>
                        <h4 className='letters'>
                            Crea tu propia libreria de ejercicios
                        </h4>
                    </div>
                </div>

                <div className='card6'>
                    <img className='card6-icon' src="https://cdn-icons-png.flaticon.com/512/1556/1556579.png" alt="controlPayments" />
                    <div className='card6-internal'>
                        <h4 className='letters'>
                            Controla tus ingresos
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
