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
        <Link href={'/admin/banners'}>
          <a>Danh Sách Banners</a>
        </Link>
        <Link href={'/admin/banners'}>
          <a>Cập Nhật Banners</a>
        </Link>
      </MDBSideNavCat>
      <MDBSideNavCat
        iconRegular
        name="Instruction"
        id="instruction-cat"
        icon="hand-pointer"
      >
        <a>For bloggers</a>
        <a>For authors</a>
      </MDBSideNavCat>
      <MDBSideNavCat name="About" id="about-cat" icon="eye">
        <a>Instruction</a>
        <a>Monthly meetings</a>
      </MDBSideNavCat>
      <MDBSideNavCat name="Contact me" id="contact-me-cat" icon="envelope">
        <a>FAQ</a>
        <a>Write a message</a>
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
        <a>
          <MDBIcon icon="envelope" className="d-inline-inline" />{' '}
          <div className="d-none d-md-inline">Contact</div>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a>
          <MDBIcon far icon="comments" className="d-inline-inline" />{' '}
          <div className="d-none d-md-inline">Support</div>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <a>
          <MDBIcon icon="user" className="d-inline-inline" />{' '}
          <div className="d-none d-md-inline">Account</div>
        </a>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <div className="d-none d-md-inline">Dropdown</div>
          </MDBDropdownToggle>
          <MDBDropdownMenu right>
            <a href="/#!">Action</a>
            <a href="/#!">Another Action</a>
            <a href="/#!">Something else here</a>
            <a href="/#!">Something else here</a>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </MDBNavbarNav>
  )
}
