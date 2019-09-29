import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'
import { Accordion, Card, Form, Button, Alert, Popover, OverlayTrigger } from 'react-bootstrap'


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
    <div className='container'>
      <Form className='form-inline'>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
                  
                </Form.Group>&nbsp;&nbsp;
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
                </Form.Group>&nbsp;&nbsp;
                <Button variant="primary" onClick={() =>
                  auth.createUser.createUser(form.email, form.passwd)
                }>Criar conta</Button>
              </Form>
              <Form.Text className="text-muted">
                    {
                      auth.createUser.createUserState.error !== '' &&
                      <Alert variant='danger'>{auth.createUser.createUserState.error}</Alert>
                    }
                  </Form.Text>
           
    </div>
  )
}

export default CreatUser
