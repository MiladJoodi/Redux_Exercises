import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts } from './postSlice'

export default function PostList () {
  const dispatch = useDispatch()
  const postList = useSelector(({ posts: { postList } }) => postList)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      {postList.map(post => (
        <div style={{ margin: 20 }} key={post.id}>
          {post.body}
        </div>
      ))}
    </div>
  )
}