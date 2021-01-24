import {
  MDBAvatar,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCardUp,
  MDBCol,
  MDBIcon,
  MDBRow,
} from 'mdbreact'
import React from 'react'

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard testimonial>
          <MDBCardUp className="indigo lighten-1" />
          <MDBAvatar className="mx-auto white">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
              alt=""
            />
          </MDBAvatar>
          <MDBCardBody>
            <h4 className="card-title">Anna Doe</h4>
            <hr />
            <p>
              <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos, adipisci{' '}
              <MDBIcon icon="quote-right" />
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard testimonial>
          <MDBCardUp gradient="aqua" />
          <MDBAvatar className="mx-auto white">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
              alt=""
            />
          </MDBAvatar>
          <MDBCardBody>
            <h4 className="card-title">Martha Smith</h4>
            <hr />
            <p>
              <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos, adipisci{' '}
              <MDBIcon icon="quote-right" />
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md="4">
        <MDBCard>
          <MDBCardImage
            top
            src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
            overlay="white-slight"
            hover
            waves
            alt="MDBCard image cap"
          />
          <MDBCardBody className="elegant-color white-text rounded-bottom">
            <a href="#!" className="activator waves-effect waves-light mr-4">
              <MDBIcon icon="share-alt" className="white-text" />
            </a>
            <MDBCardTitle>MDBCard Title</MDBCardTitle>
            <hr className="hr-light" />
            <MDBCardText className="white-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href="#!" className="black-text d-flex justify-content-end">
              <h5 className="white-text">
                Read more
                <MDBIcon icon="angle-double-right" className="ml-2" />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample
