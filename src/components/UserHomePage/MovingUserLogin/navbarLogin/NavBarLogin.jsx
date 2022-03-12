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
            <Link to="/Planing">Planifica</Link>
          </li>
          <li>
            <Link to="/Clients">Clients</Link>
          </li>
          <li>
            <Link to="/Workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/ToAddClient">Añadir Clientes</Link>
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
