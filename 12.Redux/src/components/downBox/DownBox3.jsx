import React from 'react'
import { useSelector } from 'react-redux'

function DownBox3() {

    const counter = useSelector((state)=> state.counter.value)

    const userChildren = useSelector(state=> state.user.children)

    console.log(userChildren)

  return (
    <div>
        <h5>Down box 3</h5>

        {
        userChildren.map((child)=> <h3>{child}</h3>)
        }

        <br />

        <h1>counter: {counter}</h1>
    </div>
  )
}

export default DownBox3