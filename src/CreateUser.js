import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'
import { Accordion, Card, Form, Button } from 'react-bootstrap'


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
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
                  <Form.Text className="text-muted">
                    {
                      auth.createUser.createUserState.error !== '' &&
                      <p>{auth.createUser.createUserState.error}</p>
                    }
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
                </Form.Group>
                <Button variant="primary" onClick={() =>
                  auth.createUser.createUser(form.email, form.passwd)
                }>
                  Submit
  </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default CreatUser
