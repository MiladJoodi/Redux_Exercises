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

        <br />

        <button onClick={()=>dispatch(counterSlice.actions.incrementByAmount({amount: 2, qty: 4}))}>IncrementByAmount</button>

        <p>counter: {counter}</p>
    </div>
  )
}

export default Box3