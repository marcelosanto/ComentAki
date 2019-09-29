import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap'


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
        <Tabs defaultActiveKey="entrar" transition={false} id="uncontrolled-tab-example">
          <Tab eventKey="create" title="Criar conta"><br />
          <CreateUser />
          </Tab>
          <Tab eventKey="entrar" title="Entrar"><br />
          <SigninUser />
          </Tab>
        </Tabs><br />
        <NewComment />
        <Comments /><br />
        <p>ComentaKi 2019</p>
      </div>
    </AuthProvider>
  );
}

export default App