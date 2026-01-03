import { useState } from 'react'
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import SigUp from './Components/SignUP/Sign_UP'
import Login from './Components/Login/Login_UP'


function App() {
  // const [count, setCount] = useState(0)

  const [activeForm, setactiveForm] = useState("none")
  const [button, setbutton] = useState("")

  return (
    <>
      <h1 style={{ color: "White" }}>Welcome to form</h1>

      <div>
        {activeForm === "Login" && <Login />}
      </div>

      <div>
        {activeForm === "SignUP" && <SigUp />}
      </div>

      <div>
        {}
      </div>


      <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
        <Button onClick={() => setactiveForm("SignUP")} variant="primary">SignUP</Button>
        <Button onClick={() => setactiveForm("Login")} variant="success">Login</Button>
      </div>




    </>
  )
}

export default App
