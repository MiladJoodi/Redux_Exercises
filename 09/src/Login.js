import { useState } from "react"
import { login, logout } from './Store'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const [newUsername, setNewUsername] = useState("")
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.user)
    return (
        <div><h1>Login {selector.username}</h1>
            <input onChange={(event) => setNewUsername(event.target.value)} />
            <button onClick={() => dispatch(login({ username: newUsername }))}>login</button>
            <button onClick={() => dispatch(logout())}>logout</button>
        </div>
    )
}