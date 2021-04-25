import { MDBContainer } from 'mdbreact'
import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('@components/organisms/CarouselPage'))
const Header = dynamic(() => import('@components/organisms/Header'))

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
