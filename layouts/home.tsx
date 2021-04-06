import Carousel from '@components/organisms/CarouselPage'
// import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import { MDBContainer } from 'mdbreact'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <MDBContainer fluid className="w-100 vh-100 p-0">
        <Carousel />
      </MDBContainer>
      {/* <MDBContainer>{children}</MDBContainer>
      <Footer /> */}
    </>
  )
}

export default HomeLayout
