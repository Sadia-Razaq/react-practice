import React, { useState } from 'react'

const MainCounter = (WraptoComponent) => {


    const EnhancedComponent = ()=>{

        const [count, setCount] = useState(0);


        const increment = ()=>{
            console.log("function called!")
            setCount(count + 1);
        }
        return (
            <div>
                
                <WraptoComponent 
                count = {count} 
                incrementCount = {increment}
                />
                <h1 className='text-2xl text-green'>Count: {count}</h1>
               
            </div>
          )

    }
    return EnhancedComponent;
        

      

    

}

export default MainCounter