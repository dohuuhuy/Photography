import {
  MDBNavbarNav,
  MDBNavItem,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from 'mdbreact'
import Link from 'next/link'
import React from 'react'

const NavBarRight = ({ style }: any) => {
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

export default NavBarRight
