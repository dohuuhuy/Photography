import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { MDBContainer } from 'mdbreact'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const defaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <MDBContainer style={{ marginTop: '6rem', minHeight: '900px' }}>
        {children}
      </MDBContainer>
      <Footer />
    </>
  )
}

export default defaultLayout
