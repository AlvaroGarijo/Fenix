import React from 'react'
import './stylesToAddUser.css'

export const ToAddClient = () => {
  return (
          <div className='squareLightblueUser'>   
               <div className='userList' >USUARIO 1</div>
               <div className='userList'>{/* User 2*/} </div>
               <div className='userList'>{/* User 3*/} </div>
               <div className='userList'>{/* User 4*/} </div>
               <div className='userList'>{/* User 5*/} </div>
               <div className='userList'>{/* User 6*/} </div>
               <div className='userList'>{/* User 7   --- >  Cuando paga, avanzar*/} </div>
               <div className='userList'>{/* User 8*/} </div>

                <div>{/* PAGINACIÓN */} </div>
           </div>
  )
}
