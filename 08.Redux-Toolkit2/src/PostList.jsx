import { useEffect } from "react"
import { UseDispatch, useDispatch, useSelector } from "react-redux"

import { fetchPosts } from "./postSlice"

export default function PostList(){

    const dispatch = useDispatch()
    const PostList = useSelector(state=> )

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [])

    return <div>posts</div>
}