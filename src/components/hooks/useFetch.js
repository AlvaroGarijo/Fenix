import React, { useEffect, useState } from 'react'

export const useFetch= () => {
 
    const [data, setData] = useState(null);
   
    searchDate(data)
    useEffect(()=>{
     
      
    }, [])

      const searchDate = async ()=>{
        const data = await fetch('URL de la pedida de datos')
        const users = await data.json()
        setData(data)

      }

    return(
          <ul>
            {
              users.map(item=>(
              <li key={item.id}> 
                        {data}
              </li>
              ))
            }
          </ul>
    )
}
