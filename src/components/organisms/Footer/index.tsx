// import { MDBCol, MDBRow } from 'mdbreact'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBInputGroup,
  MDBRow,
} from 'mdbreact'
import Link from 'next/link'
import React from 'react'
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">whatever you eat </h5>
            <p>If you don't know what to eat then let me choose one for you!</p>
            <p>Nếu bạn không biết chọn ăn gì thì hãy để tôi chọn cho bạn !</p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Cửa hàng</h5>
            <ul className="mx-auto p-0">
              <li className="list-unstyled">
                <a href="#">List-store</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Product</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Foody</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">About Us</h5>
            <ul className="p-0 ">
              <li className="list-unstyled d-flex text-center">
                <MDBInputGroup
                  hint="Email"
                  containerClassName="mb-3"
                  append={
                    <MDBBtn color="danger" className="m-0 px-3 py-2 z-depth-0">
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  }
                />
              </li>
              <li className="list-unstyled">
                <Link shallow href="/about">
                  About
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Made by: <a href="/"> HuYi </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
