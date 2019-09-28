import React, { useState, useContext } from 'react'
import { useDatabasePush } from './database'
import firebase from './firebase'
import { AuthContext } from './auth'

const NewComment = () => {
  const [, save] = useDatabasePush('comments')
  const [comment, setComment] = useState('')
  const auth = useContext(AuthContext)
  if(auth.user === null) {
    return null
  }
  const { displayName } = auth.user
  const [ alternativeDisplayName ] = auth.user.email.split('@')
  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName
        }
      })
      setComment('')
    }
  }
  return (
    <div className='form-group py-3 ' >
      <label for="exampleFormControlTextarea1">Insira seu comentário</label>
      <textarea className="form-control "  rows="3" value={comment} onChange={evt => setComment(evt.target.value)} /><br />
      <button className="btn btn-primary" onClick={createComment}>Comentar</button>
    </div>
  )
}

export default NewComment