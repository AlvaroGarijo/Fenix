import React from 'react'
import './style/freePage.css'

export const FreePage = () => {
    return (
        <div>
            <div className='fondContainer'>
                <div className='formFree'>
                    <img src="https://img.freepik.com/vector-gratis/plantilla-logotipo-ave-fenix_15146-287.jpg?size=338&ext=jpg" alt="FenixLogoFree" />
                    <h2>Ingresa tu eMail para disfrutar de 30 días gratis en <span>FENIX FIT</span> </h2>
                    <input type="email" name="Email" placeholder='email' />
                    <div className='acceptFree'>
                        <p className='acceptTermsFree'><input className='cuadrado' type="checkbox" name="p1" value="1" />   Acepto <span className='termCond'>Términos y Condiciones</span></p>
                        <button className="buttomFormFree" type="submit">Empieza tus 30 días</button>
                    </div>
                    <div className='imageFree'>
                        <h2 className='FenixFree'>Fenix Fit</h2>
                        <img className='logoFree' src="" alt="" />
                        <h4 className='sloganFree' >Bienvenido a tu prueba gratuita de 30 días</h4>
                    </div>

                </div>

            </div>
        </div>
    )
}
