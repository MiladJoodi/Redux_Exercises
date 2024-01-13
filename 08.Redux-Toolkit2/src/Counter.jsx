import { useDispatch, useSelector } from 'react-redux'

import { incrementAction, decrementAction } from './counterSlice'

export default function Counter () {
  const dispatch = useDispatch()

  const value = useSelector(state => state.counter.value)
  return (
    <div>
      Value: {value}
      <br />
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  )
}