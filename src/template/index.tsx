import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { MDBContainer } from 'mdbreact'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter()

  switch (asPath) {
    case '/about':
      return (
        <>
          <Header />
          <main style={{ minHeight: '900px' }} className="w-100">
            {children}
          </main>
        </>
      )

    default:
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
}

export default Layout
