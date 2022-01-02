import React from 'react'
import './styles/Cards.css'

export const Cards = () => {
    return (
        <div>
            <h2>OFRECE EL MEJOR SERVICIO</h2>
            <div className='cards'>
                <div className='card'>
                    <img className='card-icon' src="https://cdn-icons-png.flaticon.com/512/6442/6442081.png" alt="planifica" />
                    <div className='card1-internal'>
                        <h4 className='letters'>
                            Planifica de forma fácil y eficaz
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src="https://cdn-icons-png.flaticon.com/512/6183/6183784.png" alt="workout" />
                    <div className='card2-internal'>
                        <h4 className='letters'>
                            Genera tus Workouts y envíalos a tus clientes
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src="https://cdn-icons-png.flaticon.com/512/5716/5716227.png" alt="contact" />
                    <div className='card3-internal'>
                        <h4 className='letters'>
                            Contacto directo con el cliente
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src="https://cdn-icons-png.flaticon.com/512/1270/1270333.png" alt="controlEvolution" />
                    <div className='card4-internal'>
                        <h4 className='letters'>
                            Controla la evolución de forma más regular
                        </h4>
                    </div>
                </div>


                <div className='card'>
                    <img className='card-icon' src="https://cdn-icons.flaticon.com/png/512/5444/premium/5444182.png?token=exp=1640848789~hmac=4521aa20412e1a5d115054e6a5f7c79d" alt="librery" />
                    <div className='card5-internal'>
                        <h4 className='letters'>
                            Crea tu propia libreria de ejercicios
                        </h4>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-icon' src="https://cdn-icons-png.flaticon.com/512/1556/1556579.png" alt="controlPayments" />
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
