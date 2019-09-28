import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SigninUser from './SigninUser'
import Header from './Header'

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <Header />
        <CreateUser />
        <SigninUser />
        <NewComment />
        <Comments />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App