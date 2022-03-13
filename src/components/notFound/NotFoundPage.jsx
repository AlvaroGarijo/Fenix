import React from "react";
import "./styleNotFound.css";

export const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1> 404! Upsss No has encontrado la página</h1>
      <h3>
        Intenta{" "}
        <a className="goLogin" href="./Login">
          darte de alta{" "}
        </a>{" "}
        o{" "}
        <a className="goSesion" href="/StartSesion">
          inicia sesión
        </a>{" "}
      </h3>
    </div>
  );
};
