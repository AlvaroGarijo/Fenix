import React from 'react'
import './styles/Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <h2 className='titleFooter'>Fénix Fit</h2>
                <div className="orderFooter">
                    <ul className="orderIcons">
                        <li className="list">
                            <a href="https://twitter.com/">
                                <img className='icons' src="https://cdn-icons-png.flaticon.com/512/1384/1384049.png" alt="twitterIcon" /></a >
                        </li >
                        <li className="list" >
                            <a href="https://www.facebook.com/">
                                <img className="icons" src=" https://cdn-icons-png.flaticon.com/512/21/21155.png" alt="facebookIcon" /></a >
                        </li>
                        <li className="list" >
                            <a href="https://www.youtube.com/">
                                <img className="icons" src="https://cdn-icons-png.flaticon.com/512/1384/1384044.png" alt="youtubeIcon" /></a >
                        </li >
                        <li className="list" >
                            <a href="https://www.linkedin.com/company/">
                                <img className="icons" src="https://cdn-icons-png.flaticon.com/512/1384/1384046.png" alt="linkedinIcon" /></a >
                        </li >
                        <li className="list">
                            <a href="https://github.com/">
                                <img className="icons" src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="githubIcon" />
                            </a >
                        </li >
                        <li className='list'>
                            <a href="https://instagram.com/">
                                <img className='icons' src="https://cdn-icons-png.flaticon.com/512/1419/1419647.png" alt="instagramIcon" />
                            </a >
                        </li >
                    </ul >
                    <ul className="copyFenix" >

                        <li className="list2">Aviso Legal</li>
                        <li className="list2">Términos y condiciones</li>
                        <li className="list2">Politica de Privacidad</li>
                        <li className="list2">¿Dónde nos encuentras?</li>
                        <li className="list2">C/ Inventada 25, 29016, Málaga</li>

                    </ul >

                </div >
                <li className="list2-copy">Fenix Fit © 2022 todos los derechos reservados </li >
            </div >
        </>
    )
}

