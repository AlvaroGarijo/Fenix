import React from "react";
import { Link } from "react-router-dom";
import { Planing } from "./planing/Planing";
import { Clients } from "./clients/Clients";
import { Workouts } from "./workouts/Workouts";
import { ToAddClient } from "./newUser/ToAddClient";
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
            <a href={<Workouts />}>Workouts</a>
          </li>
          <li>
            <a href={<Clients />}>Clientes</a>
          </li>
          <li>
            <a href={<ToAddClient />}>Añadir Cliente</a>
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
