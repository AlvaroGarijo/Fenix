import React from 'react'
import './stylesToAddUser.css'

export const ToAddClient = () => {
  return (
    <div className='orderAddClient'>
      <h1 className='titleAddClient'>Añadir Cliente</h1>
      <div>
        <form>
          <div className="formAddClient">
            <span className="addNameClient">Nombre: </span>
            <input type="text" className="addNameClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addLastNameClient">Apellidos: </span>
            <input type="text" className="addLastNameClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addEmailClient">Email: </span>
            <input type="text" className="addEmailClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addPhoneClient">Teléfono: </span>
            <input type="text" className="addPhoneClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addDateClient">Fecha de ALTA</span>
            <input type="text" className="addDateClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addOldClient">Edad: </span>
            <input type="text" className="addOldClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>

          <div className="formAddClient">
            <span className="addObjetiveClient">Objetivo Deportivo: </span>
            <input type="text" className="addObjetiveClient2" name="Nombre" placeholder="Nombre" id="name" required />
          </div>
        </form>
      </div>


    </div>
  )
}
