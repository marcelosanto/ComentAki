import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { AuthContext } from './auth'

const Header = ({ comment }) => {
  const auth = useContext(AuthContext)
  if (auth.user === null) {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">ComentAki</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
    )
  }
  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  const dn = displayName || alternativeDisplayName
  return (
    // <nav className="navbar navbar-dark bg-primary">
    //   <a className="navbar-brand" href="#">ComentAki</a>
    //   <button type="button" class="btn btn-danger">Sair</button>
    // </nav>

    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">ComentAki</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Olá <a>{dn}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header