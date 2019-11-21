import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'
import { Form, Alert, Button } from 'react-bootstrap'

const SigninUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({ email: '', passwd: '' })
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }
  return (
    <div className='container'>
      <Form className='form-inline'>
        <Form.Group class="form-group mb-2 p-2" controlId="formBasicEmail">
          <Form.Control type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />

        </Form.Group>&nbsp;&nbsp;
                <Form.Group controlId="formBasicPassword">
          <Form.Control type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
        </Form.Group>&nbsp;&nbsp;
                <Button variant="primary" onClick={() =>
          auth.signInUser.signInUser(form.email, form.passwd)
        }>Entrar</Button>
      </Form>
      <Form.Text className="text-muted">
        {

          auth.signInUser.signInUserState.error !== '' &&
          <Alert variant='danger'>{auth.signInUser.signInUserState.error}</Alert>
        }
      </Form.Text>
    </div>
  )
}

export default SigninUser
