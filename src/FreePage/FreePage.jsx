import React from "react";
import "./style/freePage.css";

export const FreePage = () => {
  return (
    <div>
      <div className="fondContainer">
        <div className="cuadroOpaco">
          <div className="orderFormFree1">
            <i className="fa-brands fa-skyatlas"></i>
            <h2 className="h2FreePage">
              Ingresa tu Email para disfrutar de 30 días gratis en FENIX FIT
            </h2>
            <input
              className="inputFree"
              type="email"
              name="Email"
              placeholder="email"
            />
            <div className="acceptFree">
              <button className="buttomFormFree" type="submit">
                Empieza tus 30 días
              </button>
            </div>
          </div>
          <div className="orderFormFree2">
            <h2 className="FenixFree">FENIX FIT</h2>
            <img
              className="imgFreePage"
              src="./img/logoFenixRojo.webp"
              alt="FenixLogoFree"
            />
            <h4 className="sloganFreePage">
              BIENVENIDO A TU PRUEBA GRATUITA DE 30 DIAS
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
