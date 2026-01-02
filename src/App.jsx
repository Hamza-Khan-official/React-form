import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  const [SignUP, setSingUP] = useState(true);

  function Update_form(){
    setSingUP(!SignUP)
  }

  return (
    <>
    <h1 style={{color:"White"}}>Welcome to form</h1>
    {
      SignUP ? <>
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <br /><br />
        </div>
      </> :
        <>
          <div>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <br /><br />
          </div>
        </>
    }
      <Button onClick={Update_form} variant="success"> {SignUP ? "Login" : "SIgnUP"}</Button>

    </>
  )
}

export default App
