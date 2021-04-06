import { MDBBtn, MDBCol, MDBIcon, MDBRow } from 'mdbreact'
import Image from 'next/image'
import React from 'react'

import styles from './style.module.scss'
import cx from 'classnames'

const Contact = () => {
  return (
    <MDBRow>
      <MDBCol lg="5" className="lg-0 mb-4">
        <Image
          src={require('public/images/home-main.svg')}
          objectFit="fill"
          layout="fill"
        />
      </MDBCol>
      <MDBCol lg="7">
        <h2 className="h2-responsive font-weight-bold text-center my-5">
          Liên Hệ
        </h2>
        <div
          id="map-container"
          className={cx(styles.map, 'rounded z-depth-1-half map-container')}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
            title="This is a unique title"
            width="100%"
            height="100%"
            frameBorder="0"
            className={styles.iframe_map}
            style={{ borderRadius: '20px' }}
          />
        </div>
        <br />
        <MDBRow className="text-center">
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="map-marker-alt" />
            </MDBBtn>
            <p>Tp.Hồ Chí Minh</p>
            <p className="mb-md-0">38/17, P14, Quận Gò Vấp</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="phone" />
            </MDBBtn>
            <p>0583538872</p>
            <p className="mb-md-0">thứ 2 - 7, 8:00-22:00</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="envelope" />
            </MDBBtn>
            <p>dohuuhuy2@gmail.com</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  )
}

export default Contact
