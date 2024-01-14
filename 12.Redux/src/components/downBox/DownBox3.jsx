import React from 'react'
import { useSelector } from 'react-redux'

function DownBox3() {

    const counter = useSelector((state)=> state.counter.value)

  return (
    <div>
        <h5>downbox 3</h5>
        <h1>counter: {counter}</h1>
    </div>
  )
}

export default DownBox3