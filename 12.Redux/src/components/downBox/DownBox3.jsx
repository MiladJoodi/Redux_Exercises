import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../../redux/userSlice'

function DownBox3() {

    const counter = useSelector((state)=> state.counter.value)

    const userChildren = useSelector(state=> state.user.children)

    // console.log(userChildren)

    const dispatch = useDispatch()

  return (
    <div>
        <h5>Down box 3</h5>

        <button onClick={()=>dispatch(userSlice.actions.addChildren(["senko", "korom"]))}>add children</button>

        {
        userChildren.map((child)=> <h3>{child}</h3>)
        }

        <br />

        <h1>counter: {counter}</h1>
    </div>
  )
}

export default DownBox3