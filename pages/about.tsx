import {
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdbreact'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <MDBRow className="w-100 vh-100">
      <MDBCol md="5">
        <Image src="/images/about.jpg" layout="fill" objectFit="fill" />
      </MDBCol>
      <MDBCol md="7">
        <MDBContainer style={{ marginTop: '6rem' }}>
          <MDBCardGroup column>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">
                  Panel title that wraps to a new line
                </MDBCardTitle>
                <MDBCardText>
                  This is a longer panel with supporting text below as a natural
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{' '}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </MDBCard>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This panel has supporting text below as a natural lead-in to
                  additional content.
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard
              color="warning-color"
              text="white"
              className="text-center p-3"
            >
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet,</p>
                <footer className="blockquote-footer">
                  <small className="text-white">
                    Someone famous in{' '}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </MDBCard>

            <MDBCard className="text-center">
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This panel has supporting text below as a
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="text-right p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{' '}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </MDBCard>

            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This is a wider panel with supporting text below as a natural
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  )
}
AboutPage.layout = 'about'
export default AboutPage
