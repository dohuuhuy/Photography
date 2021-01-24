import { MDBContainer } from 'mdbreact'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
// import BreadcrumbPage from '@components/organisms/Breadcrumb'
import CarouselPage from '@components/organisms/CarouselPage'
import Footer from '@components/organisms/Footer'
import Header from '@components/organisms/Header'
import MultiCarouselPage from '@components/organisms/MultiCarouselPage'
import BreadcrumbPage from '@components/organisms/Breadcrumb'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Food' }: Props) => {
  const router = useRouter()
  const array_hidden = ['/login', '/register']
  return array_hidden.includes(router.asPath) ? (
    <> {children} </>
  ) : (
    <>
      {/* begin Header */}
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* begin Header */}
      <Header />

      {/* begin main */}
      <main style={{ paddingTop: '4.4rem' }}>
        {/* begin BreadcrumbPage */}
        <BreadcrumbPage />
        {/* begin MultiCarouselPage */}
        <MultiCarouselPage />
        {/* begin CarouselPage */}
        <CarouselPage />
        {/* begin Container main */}
        <MDBContainer>{children}</MDBContainer>
      </main>
      {/* begin Footer */}
      <Footer />
    </>
  )
}

export default Layout
