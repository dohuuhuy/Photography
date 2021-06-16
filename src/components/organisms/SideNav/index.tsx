import { MDBContainer, MDBNavbar, MDBSideNav } from 'mdbreact'
import dynamic from 'next/dynamic'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer'

const MenuSidebar = dynamic(() => import('@components/molecules/MenuSidebar'))
// const NavbarLeft = dynamic(() => import('@components/molecules/NavbarLeft'))
// const NavBarRight = dynamic(() => import('@components/molecules/NavBarRight'))

interface Props {
  children: any
}

const DoubleNavigationPage = ({ children }: Props) => {
  // const [toggleStateA, settoggleStateA] = useState(false)
  const [breakWidth] = useState(1300)

  const [windowWidth, setwindowWidth] = useState(0)

  useEffect(() => {
    handleResize()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth)
    }
  }

  // const handleToggleClickA = () => {
  //   settoggleStateA(!toggleStateA)
  // }

  const navStyle = {
    paddingLeft: windowWidth > breakWidth ? '210px' : '16px',
  }

  const mainStyle = {
    paddingTop: '5.5rem',
    paddingLeft: windowWidth > breakWidth ? '240px' : '0',
  }

  // const specialCaseNavbarStyles = {
  //   WebkitBoxOrient: 'horizontal',
  //   flexDirection: 'row',
  // }

  return (
    <>
      <div className="fixed-sn light-blue-skin">
        {/* sidebar bên trái */}
        <MDBSideNav
          logo={require('public/images/logo_branch (2).png')}
          // triggerOpening={!!toggleStateA}
          breakWidth={breakWidth}
          bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
          fixed
          onClick={() => router.push('/admin')}
        >
          {/* menu trái */}
          <MenuSidebar />
        </MDBSideNav>

        {/* menu ngang  */}
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
          helo
        </MDBNavbar>

        {/* Container Admin */}
        <main style={mainStyle}>
          <MDBContainer fluid className="mt-5 vh-100">
            {children}
          </MDBContainer>
        </main>

        {/* Phần footer */}
        <Footer />
      </div>
    </>
  )
}

export default DoubleNavigationPage
