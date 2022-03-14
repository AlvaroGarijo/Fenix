import React from "react";
import { Link } from "react-router-dom";

import "./stylesNavBarLogin.css";

export const NavBarLogin = () => {
  return (
    <div className="orderLogin">
      <div className="NavBarUser">
        <img
          className="imgUserLog"
          src="../img/UsuarioCliente2.jpeg"
          alt="??"
        />
        <div className="nameUser">Nombre y Apellidos</div>
        <div className="listUserLog">
          <li>
            <Link to="/Planing">Planing</Link>
          </li>
          <li>
            <Link to="/Workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/Athlete">Atleta</Link>
          </li>
          <li>
            <Link to="/ToAddClient">Añadir Cliente</Link>
          </li>
        </div>
        <img
          className="imgLogoFenix"
          src="../img/logoFenixRojo.webp"
          alt="LogoFenix"
        />
        <h3 className="titleNavBar">FENIX FIT</h3>
      </div>
    </div>
  );
};
