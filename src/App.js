import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import SigninUser from './SigninUser'
import UserInfo from './UserInfo'

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <UserInfo />
        <CreateUser />
        <SigninUser />
        <NewComment />
        <Comments />
      </div>
    </AuthProvider>
  );
}

export default App