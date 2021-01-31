import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { MDBContainer } from 'mdbreact'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
  type?: string
}

const Layout = ({ children, type }: Props) => {
  const main = (type: any) => {
    {
      switch (type) {
        case 'none':
          return (
            <MDBContainer
              className="vh-100 p-0 m-0"
              style={{ marginTop: 'rem' }}
            >
              {children}
            </MDBContainer>
          )

        default:
          return (
            <MDBContainer className="p-0" style={{ marginTop: 'rem' }}>
              {children}
            </MDBContainer>
          )
      }
    }
  }

  return (
    <>
      <Header />
      {main(type)}
      <Footer />
    </>
  )
}

export default Layout
