import React from 'react'
import './style/freePage.css'

export const FreePage = () => {
    return (
        <div>
            <div className='fondContainer'>
                <div className='cuadroOpaco'>
                    <div className='orderFormFree1'>
                        <img className='iconFreePage' src="https://cdn-icons.flaticon.com/png/512/2351/premium/2351509.png?token=exp=1641897973~hmac=9b7787c0f027a49802d72db36c7bf70e" alt="" />
                        <h2 className='h2FreePage'>Ingresa tu Email para disfrutar de 30 días gratis en FENIX FIT</h2>
                        <input className='inputFree' type="email" name="Email" placeholder='email' />
                        <div className='acceptFree'>
                            <p className='acceptTermsFree'><input className='cuadrado' type="checkbox" name="p1" value="1" />   Acepto <span className='termCond'>Términos y Condiciones</span></p>
                            <button className="buttomFormFree" type="submit">Empieza tus 30 días</button>
                        </div>
                    </div>
                    <div className='orderFormFree2'>
                        <h2 className='FenixFree'>FENIX FIT</h2>
                        <img src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-287.jpg?size=338&ext=jpg" alt="FenixLogoFree" />
                        <h4 className='sloganFreePage' >BIENVENIDO A TU PRUEBA GRATUITA DE 30 DIAS</h4>
                    </div>
                </div>

            </div>

        </div>

    )
}
