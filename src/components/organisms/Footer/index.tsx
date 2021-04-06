// import { MDBCol, MDBRow } from 'mdbreact'
import { Social } from '@components/molecules/Social'
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdbreact'
import React from 'react'
import styles from './style.module.scss'

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4 ">
      <MDBContainer className={styles.footer}>
        <MDBRow>
          <MDBCol md="4" className="scol-pb-sm text-center">
            <MDBRow>
              <MDBCol md="10">
                <h5>Văn Phòng</h5>
                <p>38/18 Phường 14 Gò Vấp TP. Hồ Chí Minh</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="col-pb-sm text-center">
            <h5>Liên hệ</h5>
            <p>
              <a href="#">dohuuhuy2@gmail.com</a>
            </p>
          </MDBCol>
          <MDBCol md="4" className="col-pb-sm text-center">
            <h5>Mạng xã hội</h5>
            <Social />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12" className="text-center">
            <p>
              <span className="block">
                Copyright © All rights reserved | Made with &nbsp;
                <MDBIcon icon="heart" /> &nbsp;HuYi
                <br />
              </span>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer
