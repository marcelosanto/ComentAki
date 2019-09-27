import React, { useContext } from 'react'
import { AuthContext } from './auth'

const CreatUser = () => {
  const auth = useContext(AuthContext)
  return (
    <>
    {JSON.stringify(auth.createUser)}
      <button
        onClick={ () => 
          auth.createUser.createUser('marcelo2019@lol.com', '123456')
        }>ADD</button>
    </>
  )
}

export default CreatUser
