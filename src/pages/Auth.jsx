import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Auth() {

  const [authState, setAuthState] = useState(true)

  const handleAuthState = () => {
    setAuthState(!authState)
  }

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center ' style={{ minHeight: "100vh" }}>
        <div className="p-3 border border-light border-3 w-75">
          <div className="row">
            <div className="col">
              <img src="https://cdn-icons-png.flaticon.com/512/1791/1791961.png" alt="" className='w-75' />
            </div>
            <div className="col">
              <h2>
                {
                  authState?
                    <>Login</>
                  :
                  <>Sign Up</>
                }
                </h2>
              <div className="mt-4">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                {
                  !authState &&
                  <>
                    <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" >
                      <Form.Control type="text" placeholder="username" />
                    </FloatingLabel>
                  </>
                }

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </div>
              <div className="d-flex justify-content-between mt-5">
                {
                  authState ?
                    <button className='btn btn-success'>Login</button>
                    :
                    <button className='btn btn-success'>Register</button>
                }

                <button className='btn btn-link' onClick={handleAuthState}>
                  {
                    authState ?
                      <> New User?</>
                      : <>Already a user?</>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
