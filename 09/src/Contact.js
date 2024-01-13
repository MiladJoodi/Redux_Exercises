import { useSelector } from "react-redux"

export const Contact =() =>{
    const selector = useSelector((state)=> state.user)
    return(
        <div>Contact {selector.username}</div>
    )
}