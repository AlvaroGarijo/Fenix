import './styles/NavBar.css';

const NavBar = () => {

    return (
        <>
            <nav className='orderNav'>
                <div className='orderLogo' >
                    <img className="logoNav" src='../img/logoFenixRojo.webp' alt="LogoFenix" />
                    <div className='titleNav'> <a href="./">FENIX FIT </a> </div>
                </div>
                <div className='orderListNav'>
                    <ol className='listNav'>
                        <li> <a className='listNavFenix' href="./FenixFit">FENIX FIT</a></li>
                        <li> <a className='listNavFenix' href="./Tarifas">TARIFAS</a></li>
                        <li> <a className='listNavFenix' href="./Opinions">OPINIONES</a></li>
                    </ol>

                    <div className='orderButton'>
                        <button className='iniciaSesion'><a href="./StartSesion"> Inicia Sesion</a> </button>
                        <button className='login'><a href="./Login"> <i className="fa-solid fa-arrow-right-to-bracket"></i>  Login</a></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;