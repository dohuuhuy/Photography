import AdminLayout from 'layouts/admin'
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from 'mdbreact'
import React, { useEffect } from 'react'

const BannersPage = () => {
  const getData = async () => {
    const url = `${process.env.API_BE}/banners/getAllBanners`
    console.log('url :>> ', url)
    const dta = await fetch(url)
    console.log('dta :>> ', dta)
  }
  useEffect(() => {
    getData()
  }, [])

  const columns = ['Person Name', 'Age', 'Company Name', 'Country', 'City']

  const data = [
    ['Aurelia Vega', 30, 'Deepends', 'Spain', 'Madrid'],
    ['Guerra Cortez', 45, 'Insectus', 'USA', 'San Francisco'],
    ['Guadalupe House', 26, 'Isotronic', 'Germany', 'Frankfurt am Main'],
    ['Elisa Gallagher', 31, 'Portica', 'United Kingdom', 'London'],
  ]

  const updateData = (value: any) => {
    console.log('value :>> ', value)
  }

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
          <MDBTableEditable
            data={data}
            columns={columns}
            striped
            bordered
            getValue={(value: any) => updateData(value)}
          />
        </MDBCardBody>
      </MDBCard>
    </>
  )
}
BannersPage.Layout = AdminLayout
export default BannersPage
