import { useSelector } from "react-redux"

export const Contact =() =>{
    const seletore = useSelector((state)=> state.user)
    return(
        <div>Contact {seletore.username}</div>
    )
}