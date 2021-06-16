import { MDBNavbarNav, MDBNavItem, MDBIcon } from 'mdbreact'
import React from 'react'

const NavbarLeft = ({ handleToggle }: any) => {
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
export default NavbarLeft
