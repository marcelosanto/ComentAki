import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SigninUser from './SigninUser'

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <NewComment />
        <Comments />
        <CreateUser />
        <SigninUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App