import AdminLayout from 'layouts/admin'
import { MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact'
import React from 'react'

const BannersPage = () => {
  return (
    <>
      <MDBCard>
        <MDBCardHeader
          tag="h3"
          className="text-center font-weight-bold text-uppercase py-4"
        >
          Table Editable
        </MDBCardHeader>
        <MDBCardBody>
          <p>heloo bạn </p>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}
BannersPage.Layout = AdminLayout
export default BannersPage
