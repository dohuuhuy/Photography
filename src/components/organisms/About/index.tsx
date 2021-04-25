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
import { CardAbout_interface } from 'src/interfaces'
import { list_card_about } from 'src/utils/sample-data'

const About = () => {
  return (
    <MDBRow className="vh-100">
      <MDBCol md="5">
        <Image
          alt="about"
          src="/images/about.png"
          layout="fill"
          objectFit="contain"
        />
      </MDBCol>
      <MDBCol md="7">
        <MDBContainer style={{ marginTop: '6em' }}>
          <MDBCardGroup column>
            {list_card_about.map(
              (
                {
                  title,
                  description,
                  footer,
                  color,
                  text,
                }: CardAbout_interface,
                i: number,
              ) => {
                return (
                  <MDBCard
                    color={color}
                    text={text}
                    className="text-center p-3"
                    key={i}
                  >
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">{title}</MDBCardTitle>
                      <MDBCardText>{description}</MDBCardText>
                    </MDBCardBody>
                    <footer className="blockquote-footer">
                      <small className="text-white">{footer}</small>
                    </footer>
                  </MDBCard>
                )
              },
            )}
          </MDBCardGroup>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  )
}

export default About
