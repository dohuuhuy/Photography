import Header from '@components/organisms/Header'
import { MDBContainer } from 'mdbreact'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const AboutLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <MDBContainer fluid>{children}</MDBContainer>
    </>
  )
}

export default AboutLayout
