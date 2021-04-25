import Carousel from '@components/organisms/CarouselPage'
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

      <Carousel />

      <MDBContainer>{children}</MDBContainer>
    </>
  )
}

export default HomeLayout
