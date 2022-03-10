import React from 'react'
import './stylesToAddUser.css'

export const ToAddClient = () => {
  return (
    <div className='orderAddClient'>
      <h1 className='titleAddClient'>Añadir Cliente</h1>
      <div className='allFormClient'>
        <form method='POST'>
          <div className="formAddClient">
            <span className="addFormuClient">Nombre: </span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addFormuClient">Apellidos: </span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addFormuClient">Email </span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addFormuClient">Teléfono: </span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addFormuClient">Fecha de alta</span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addFormuClient">Edad: </span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addFormuClient">Objetivo Deportivo: </span>
            <input type="text" className="addFormuClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>
        </form>
      </div>


    </div>
  )
}
