import React, { useContext, useState } from 'react'
import { Navbar, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName)
  const onChange = evt => {
    setNewDisplayName(evt.target.value)
  }
  const save = () => {
    if (newDisplayName !== '') {
      user.updateProfile({ displayName: newDisplayName })
      window.location.reload();
    }
  }
  return (
    <>
      <input type='text' value={newDisplayName} onChange={onChange} />
      <button onClick={save} >Salvar</button>
    </>
  )
}

const Header = ({ comment }) => {
  const auth = useContext(AuthContext)
  if (auth.user === null) {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">ComentAki</Navbar.Brand>
      </Navbar>
    )
  }
  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  const dn = displayName || alternativeDisplayName

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Digite seu nome</Popover.Title>
      <Popover.Content>
        <FormDisplayName displayName={dn} user={auth.user} />
      </Popover.Content>
    </Popover>
  )

  const Example = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">Mudar nome</Button>
    </OverlayTrigger>
  )

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">ComentAki</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Olá <a>{dn}&nbsp;&nbsp;</a>
        </Navbar.Text>
        <Example />&nbsp;&nbsp;
        <Button onClick={auth.signout} variant="danger">Sair</Button>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default Header