import React from 'react'

const Hoc = (wraptoComponent) => {


    return({title,myname, age, ...prop})=>{
        return (
            <div>
                
                <h1>{title}</h1>
                <p>{myname}</p>
                <p>{age}</p>
                <wraptoComponent {...prop} />
                

               
            </div>
          )

    }




}

export default Hoc