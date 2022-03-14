import React from "react";
import "./stylesPlaning.css";

export const Planing = () => {
  return (
    <div className="wrapperPlaning">
      <div className="orderTitlePlaning">
        <h1 className="titlePlaning">Planificación de Workouts</h1>
        <form method="POST">
          <div className="searchClient">
            <span className="addFormuClient">Buscar Cliente: </span>
            <input
              type="text"
              className="addFormuClient2"
              name="Nombre"
              placeholder="Nombre"
              id="name"
              required
            />
          </div>
        </form>
      </div>
      <div className="squarePlaning">
        <div className="squareTime">
          <h2>Usuario</h2>
          <div className="internalUser">
            <h1>UsuarioX</h1>
          </div>
        </div>

        <div>
          <i class="fa-solid fa-angles-left"></i>
          <i class="fa-solid fa-angles-left"></i>
        </div>

        <div className="squareWork">
          <h2>Workouts</h2>
          <div className="internalWork">
            <h1>WorkoutX</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
