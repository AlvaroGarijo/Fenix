import React, { useRef } from "react";

import "./styles/Login.css";
const URL_LOGIN = "http//localhost:8000/api/v1/user/read";
const goData = async (url, data) => {
  const resp = await fetch(url, {
    method: "GET",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  const json = await resp.json();

  return resp;
};

export const Login = (props) => {
  const refName = useRef(null);
  const refUser = useRef(null);
  const refPassword = useRef(null);

  const handleLogin = async () => {
    const data = {
      name: refName.current.value,
      user: refUser.current.value,
      password: refPassword.current.value,
    };

    const respjson = await goData(URL_LOGIN, data);

    props.access(respjson.conect);
  };

  return (
    <>
      <div className="orderStartLogin">
        <div className="orderLoginSquare">
          <form className="formUserLogin" action="POST">
            <div className="nameForm">
              <span className="internalForm1">Nombre de Usuario </span>
              <input
                type="text"
                className="internalForm2"
                name="Nombre"
                placeholder="Nombre"
                id="name"
                required
              />
            </div>

            <div className="emailForm">
              <span className="internalForm1">E-Mail</span>
              <input
                type="email"
                className="internalForm2 "
                name="email"
                placeholder="Email"
                id="Correo"
                required
                ref={refUser}
              />
            </div>
            <div className="passwordForm">
              <span className="internalForm1">Contraseña</span>
              <input
                type="password"
                name="contra"
                className="internalForm2 "
                placeholder="******"
                required
              />
            </div>

            <div className="acceptOrder">
              <button
                onClick={handleLogin}
                className="buttomForm"
                type="submit"
              >
                Acepto
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
