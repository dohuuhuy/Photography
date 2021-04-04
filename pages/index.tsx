import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'

const HomePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <h1> helo</h1>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
HomePage.layout = 'home'

export default HomePage
