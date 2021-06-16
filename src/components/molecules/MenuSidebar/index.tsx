import { MDBSideNavCat, MDBSideNavNav } from 'mdbreact'
import Link from 'next/link'
import React from 'react'

const MenuSidebar = () => {
  return (
    <MDBSideNavNav>
      <MDBSideNavCat
        name="Quản lý Banners"
        id="submit-blog-cat"
        icon="chevron-right"
      >
        <Link href={'/admin/banners'}>Danh Sách Banners</Link>
        <Link href={'/'}>Cập Nhật Banners</Link>
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

export default MenuSidebar
