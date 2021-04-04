import Carousel from '@components/organisms/CarouselPage'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="w-100 vh-100 p-0">
        <Carousel />
      </main>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default HomeLayout
