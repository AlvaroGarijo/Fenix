import React from 'react'
import './styles/Tarifas.css'


export const Tarifas = () => {
    return (
        <div>
            <div className='cabeceraSloganImage'>
                <img className='imgTarifas' src="https://i.ytimg.com/vi/j1RdHmefjmI/maxresdefault.jpg" alt="" />
                <h1 className='sloganTarifas'>Invierte en Futuro Invierte en FENIX FIT</h1>

            </div>
            <div className='tarifasFenixFit'>

                <div className='cuadroPagos'>
                    <h2 className='tarifasFF'>Tarifas Fénix Fit</h2>
                    <div className='cuadroPago1'>
                        <img className='iconTarifa' src="https://cdn-icons.flaticon.com/png/512/519/premium/519556.png?token=exp=1641716593~hmac=95450376399d5447d471d77fcb49601f" alt="" />
                        <p className='tarifa'>Hasta  7 Clientes    19 €</p>
                        <button className='buttomSuscribe'>Suscríbete</button>
                    </div>

                    <div className='cuadroPago1'>
                        <img className='iconTarifa' src="https://cdn-icons.flaticon.com/png/512/519/premium/519557.png?token=exp=1641716598~hmac=b3716da9701e1d52e4ba34e6aa0f3003" alt="" />
                        <p className='tarifa'>Hasta  20 Clientes    39 €</p>
                        <button className='buttomSuscribe'>Suscríbete</button>
                    </div>

                    <div className='cuadroPago1'>
                        <img className='iconTarifa' src="https://cdn-icons.flaticon.com/png/512/519/premium/519559.png?token=exp=1641716683~hmac=a232ca99c72fa16ad938872651c7f57b" alt="" />
                        <p className='tarifa'>Hasta  35 Clientes    69 €</p>
                        <button className='buttomSuscribe'>Suscríbete</button>
                    </div>

                    <div className='cuadroPago1'>
                        <img className='iconTarifa' src="https://cdn-icons.flaticon.com/png/512/511/premium/511669.png?token=exp=1641716842~hmac=88d6d9517b558e41c298481e325148b2" alt="" />
                        <p className='tarifa'>Hasta  50 Clientes    90 €</p>
                        <button className='buttomSuscribe'>Suscríbete</button>
                    </div>
                </div >


            </div >
            <div className='proofFree'>
                <h3 className='sloganFree' >No dudes en probar <span className='freeDays'>30 días gratuitos </span> con el funcionamiento completo hasta 7 clientes</h3>
                <button className='buttomFree' >Prueba Gratis 30 días</button>
            </div>
        </div >
    )
}
