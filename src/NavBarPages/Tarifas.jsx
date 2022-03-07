import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Tarifas.css'


export const Tarifas = () => {
    return (
        <div>
            <div className='cabeceraSloganImage'>
                <img className='imgTarifas' src='./img/imgAbajo1.jpeg' alt="" />
                <h1 className='sloganTarifas'>Invierte en Futuro Invierte en FENIX FIT</h1>

            </div>
            <div className='tarifasFenixFit'>
           
                <div className='cuadroPagos'>
                    <h2 className='tarifasFF'>Tarifas Fénix Fit</h2>
                    <div className='cuadroPago1'>
        
                        <p className='tarifa'>Hasta 7 Clientes 19 €</p>
                        <button className='buttomSuscribe1'> <i class="fa-solid fa-check-double"> Suscribete</i></button>
                    </div>

                    <div className='cuadroPago1'>
                      
                        <p className='tarifa'>Hasta 20 Clientes 39 €</p>
                        <button className='buttomSuscribe'> <i class="fa-solid fa-check-double"> Suscribete</i></button>
                    </div>

                    <div className='cuadroPago1'>
                       
                        <p className='tarifa'>Hasta 35 Clientes 69 €</p>
                        <button className='buttomSuscribe'> <i class="fa-solid fa-check-double"> Suscribete</i></button>
                    </div>

                    <div className='cuadroPago1'>
                       
                        <p className='tarifa'>Hasta 50 Clientes 90 €</p>
                        <button className='buttomSuscribe'> <i class="fa-solid fa-check-double"> Suscribete</i></button>
                    </div>
                </div >


            </div >
            <div className='proofFree'>
                <h3 className='sloganFree' >No dudes en probar <span className='freeDays'>30 días gratuitos </span> con el funcionamiento completo hasta 7 clientes</h3>
                <Link to='/FreePage'> <button className='buttomFree'> <i class="fa-solid fa-heart"> Prueba 30 dias GRATIS </i></button></Link>
            </div>
        </div >
    )
}
