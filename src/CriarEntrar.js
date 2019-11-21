import React, { useContext } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { AuthContext } from './auth'

import CreateUser from './CreateUser'
import SigninUser from './SigninUser'

const CriarEntrar = () => {
  const auth = useContext(AuthContext)
  if (auth.user === null) { 
  return (
    <div>
    <Tabs defaultActiveKey="entrar" transition={false} id="uncontrolled-tab-example">
    <Tab eventKey="create" title="Criar conta"><br />
    <CreateUser />
    </Tab>
    <Tab eventKey="entrar" title="Entrar"><br />
    <SigninUser />
    </Tab>
  </Tabs><br />
  </div>
  )}

  return <></>
}

export default CriarEntrar