import React from 'react'
import Time from './Time'

const Comment = ({ comment }) => {
  return (
    <div className="list-group py-1">
      <a href='#' className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{comment.user.name}</h5>
          <small><Time timestamp={comment.createdAt} /></small>
        </div>
        <p className="mb-1">{comment.content}</p>
      </a>
    </div >
  )
}

export default Comment