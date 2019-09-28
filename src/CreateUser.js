import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'
import { Accordion, Card } from 'react-bootstrap'


const CreatUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({ email: '', passwd: '' })
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }
  if (auth.user !== null) { return null }
  return (
    <>
      {
        auth.createUser.createUserState.error !== '' &&
        <p>{auth.createUser.createUserState.error}</p>
      }
      <Accordion >
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Criar nova conta
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
              <input type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
              <button
                onClick={() =>
                  auth.createUser.createUser(form.email, form.passwd)
                }>Criar conta</button></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default CreatUser
