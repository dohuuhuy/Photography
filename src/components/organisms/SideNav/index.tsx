import {
  MDBContainer,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBSideNav,
  MDBSideNavCat,
  MDBSideNavNav,
} from 'mdbreact'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer'

interface Props {
  children: any
}

const DoubleNavigationPage = ({ children }: Props) => {
  const [toggleStateA, settoggleStateA] = useState(false)
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

  const handleToggleClickA = () => {
    settoggleStateA(!toggleStateA)
  }

  const navStyle = {
    paddingLeft: windowWidth > breakWidth ? '210px' : '16px',
  }

  const mainStyle = {
    paddingTop: '5.5rem',
    paddingLeft: windowWidth > breakWidth ? '240px' : '0',
  }

  const specialCaseNavbarStyles = {
    WebkitBoxOrient: 'horizontal',
    flexDirection: 'row',
  }

  return (
    <>
      <div className="fixed-sn light-blue-skin">
        {/* sidebar bên trái */}
        <Link href="/admin">
          <MDBSideNav
            logo={require('public/images/logo_branch (2).png')}
            triggerOpening={!!toggleStateA}
            breakWidth={breakWidth}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            fixed
          >
            {/* menu trái */}
            <Menu />
            {/* menu trái */}
          </MDBSideNav>
        </Link>
        {/* sidebar bên trái */}

        {/* menu ngang  */}
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
          <Navbar_Left handleToggle={() => handleToggleClickA} />
          <NavBar_Right style={specialCaseNavbarStyles} />
        </MDBNavbar>
        {/* menu ngang  */}

        {/* Container Admin */}
        <main style={mainStyle}>
          <MDBContainer fluid className="mt-5 vh-100">
            {children}
          </MDBContainer>
        </main>
        {/* Container Admin */}

        {/* Phần footer */}
        <Footer />
        {/* Phần footer */}
      </div>
    </>
  )
}

export default DoubleNavigationPage

export const Menu = () => {
  return (
    <MDBSideNavNav>
      <MDBSideNavCat
        name="Quản lý Banners"
        id="submit-blog-cat"
        icon="chevron-right"
      >
        <Link href={'/admin/banners'}>Danh Sách Banners</Link>
        <Link href={'/admin/banners'}>Cập Nhật Banners</Link>
      </MDBSideNavCat>
      <MDBSideNavCat
        iconRegular
        name="Instruction"
        id="instruction-cat"
        icon="hand-pointer"
      >
        For bloggers For authors
      </MDBSideNavCat>
      <MDBSideNavCat name="About" id="about-cat" icon="eye">
        Instruction Monthly meetings
      </MDBSideNavCat>
      <MDBSideNavCat name="Contact me" id="contact-me-cat" icon="envelope">
        FAQ Write a message
      </MDBSideNavCat>
    </MDBSideNavNav>
  )
}

export const Navbar_Left = ({ handleToggle }: any) => {
  return (
    <MDBNavbarNav left>
      <MDBNavItem>
        <div
          onClick={() => handleToggle()}
          key="sideNavToggleA"
          style={{
            lineHeight: '32px',
            marginRight: '1em',
            verticalAlign: 'middle',
          }}
        >
          <MDBIcon icon="bars" color="white" size="2x" />
        </div>
      </MDBNavItem>
      <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
        CMS Huyi
      </MDBNavItem>
    </MDBNavbarNav>
  )
}

export const NavBar_Right = ({ style }: any) => {
  return (
    <MDBNavbarNav right style={style}>
      <MDBNavItem active>
        <Link href="/#!">
          <MDBIcon icon="envelope" className="d-inline-inline" />{' '}
          <div className="d-none d-md-inline">Contact</div>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/#!">
          <MDBIcon far icon="comments" className="d-inline-inline" />{' '}
          <div className="d-none d-md-inline">Support</div>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/#!">
          <MDBIcon icon="user" className="d-inline-inline" />{' '}
          <div className="d-none d-md-inline">Account</div>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <div className="d-none d-md-inline">Dropdown</div>
          </MDBDropdownToggle>
          <MDBDropdownMenu right>
            <Link href="/#!">Action</Link>
            <Link href="/#!">Another Action</Link>
            <Link href="/#!">Something else here</Link>
            <Link href="/#!">Something else here</Link>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </MDBNavbarNav>
  )
}
