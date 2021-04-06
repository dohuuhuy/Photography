import Footer from '@components/organisms/Footer'
import SideNavPage from '@components/organisms/SideNav'
import { MDBContainer } from 'mdbreact'
import React from 'react'

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <SideNavPage />
      <MDBContainer style={{ marginTop: '6rem', minHeight: '900px' }}>
        {children}
      </MDBContainer>
      <Footer />
    </>
  )
}

export default AdminLayout
