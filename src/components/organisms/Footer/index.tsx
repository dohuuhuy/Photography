// import { MDBCol, MDBRow } from 'mdbreact'
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdbreact'
import React from 'react'
const Footer = () => {
  return (
    <MDBFooter color="orange" className="font-small pt-4 mt-4 ">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4" className="scol-pb-sm text-center">
            <MDBRow>
              <MDBCol md="10">
                <h2>Office</h2>
                <p>
                  68/104A Đồng Nai - Phường 15 - Quận 10 - Thành phố Hồ Chí Minh
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="col-pb-sm text-center">
            <h2>Get in Touch</h2>
            <p>
              <a href="#">ht.minh@gmail.com</a>
            </p>
          </MDBCol>
          <MDBCol md="4" className="col-pb-sm text-center">
            <h2>Social</h2>
            <ul className="list-inline py-2">
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg gplus-ic">
                  <MDBIcon fab icon="google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin" />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        {/* <MDBRow>
          <MDBCol md="12" className="text-center">
            <p>
              <span className="block">
                Copyright © All rights reserved | Made with &nbsp;
                <MDBIcon icon="heart" /> &nbsp;HuYi
                <br />
              </span>
            </p>
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer
