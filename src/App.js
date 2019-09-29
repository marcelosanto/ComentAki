import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import CriarEntrar from './CriarEntrar'
import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import UserInfo from './UserInfo'

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <UserInfo />
       <CriarEntrar />
        <NewComment />
        <Comments /><br />
        <p>ComentaKi 2019</p>
      </div>
    </AuthProvider>
  );
}

export default App