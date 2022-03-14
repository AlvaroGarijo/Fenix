import React from "react";
import { useState, useEffect } from "react";

import "./styleClient.css";

export const Athlete = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/read")
      .then((data) => data.json())
      .then((data) => {
        setUsers(data["user"]);
      });
  }, []);

  return (
    <div className="orderClients">
      <div className="orderSquareUsers">
        <div className="orderUsersOne">
          <h2 className="titleUser">Usuarios</h2>
          {users.map((user, key) => {
            return (
              <ol key={key} className="areaUser">
                <li className="areaUser1"> Nombre: {user.name}</li>
                <li className="areaUser1"> Email: {user.email}</li>
                <li className="areaUser1"> Edad: </li>
                <li className="areaUser1"> Objetivo: </li>
                <li className="areaUser1"> Fecha de Inicio: </li>
              </ol>
            );
          })}
        </div>
      </div>
    </div>
  );
};
