import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { counterSlice } from '../redux/counterSlice'

function Box3() {

    const counter = useSelector(state=> state.counter.value)
    const dispatch = useDispatch()
    
    console.log(counter)

  return (
    <div>
        <h5>Box3</h5>
        <br />
        <button onClick={()=>dispatch(counterSlice.actions.increment())}>Increment</button>
        <br />
        <button onClick={()=>dispatch(counterSlice.actions.decrement())}>Decrement</button>
        <p>counter: {counter}</p>
    </div>
  )
}

export default Box3