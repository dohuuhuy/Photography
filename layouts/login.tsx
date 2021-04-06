import { MDBContainer } from 'mdbreact'
import React from 'react'

const LoginLayout = ({ children }: any) => {
  return (
    <>
      <MDBContainer className="vh-100 w-100">{children}</MDBContainer>
    </>
  )
}

export default LoginLayout
