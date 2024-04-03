import React from 'react'

const CountChild = ({count , incrementCount}) => {
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={incrementCount}>Increment</button>
    </>
  )
}

export default CountChild