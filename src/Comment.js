import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext)
  return (
    <div class="list-group">
    <br />
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small><Time timestamp={comment.createdAt} /></small>
        </div>
        <p class="mb-1">{comment.content}</p>
        <small> {comment.user.name}</small>
      </a><br />
    </div >
  )
}

export default Comment