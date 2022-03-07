import React from 'react'
import { Link } from 'react-router-dom'
import './styles/FenixFit.css'


export const FenixFit = () => {
            
    return (

        
        <>
            <div class='imagesCarrousel'>
                <img className='imgFF' src='./img/imgPrincipal10.jpg' alt="" srcset="" />
                <img className='imgFFGreat' src='./img/imgPrincipal6.jpeg' alt="" srcset="" />
                <img className='imgFF' src='./img/imgPrincipal8.JPG' alt="" srcset="" />
            </div>

            <div className='info1'>
                <div className='orderInfo1'>
                    <p className='parrafoFit'>
                        Fenix Fit es un recurso para entrenadores,
                        pensado para que puedas tener el máximo control sobre tu negocio Fitness.
                    </p>
                </div>
                <div className='order2Info1'>
                    <img className='principalImg' src="https://images.ecestaticos.com/uARE0E8xHcbYxZ1oIpAsmI4SXpA=/0x123:2271x1399/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4da%2F403%2F02b%2F4da40302bea043bea8d2156bd20b22e5.jpg" alt="" />
                    <div >

                        <Link to='/FreePage'><button className='butomPruebaFF' >Prueba Gratis</button> </Link>
                    </div>
                </div>
            </div>
            <div className='info2'>

                <div className='orderInfo2'>
                    <ul className='listFit2'>
                        <li className='listFenix'>Digitaliza tu negocio</li>
                        <li className='listFenix'>Crea workouts personalizados</li>
                        <li className='listFenix'>Sube imagenes y vídeos</li>
                        <li className='listFenix'>Comparte la evolución de tus clientes</li>
                        <li className='listFenix'>Asigna entrenamientos Online</li>
                    </ul>
                    <div className='loMerecen'>
                        <h2>¡Tus clientes lo merecen!</h2>
                        <img className='imgResponsive' src="https://img.freepik.com/vector-gratis/dispositivo-fondo-blanco_266838-127.jpg?size=626&ext=jpg" alt="dispositivosImg" />
                        <div className='logAppOrder'>
                            <a href="https://play.google.com/store?gl=ES"> <img className='logApp' src="https://1000marcas.net/wp-content/uploads/2021/07/Google-Play-logo.png" alt="logoGooglePlay" /> </a>
                            <a href="https://www.apple.com/es/app-store/"><img className='logApp' src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" alt="logoAppStore" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
