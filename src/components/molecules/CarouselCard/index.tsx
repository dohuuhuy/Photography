import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from 'mdbreact'
import React from 'react'

interface Props {
  array_Carousel?: any
}

const CarouselCard = ({ array_Carousel }: Props) => {
  return (
    <MDBCarouselInner>
      <MDBRow>
        {array_Carousel.map(({ item, card_Item }: any, index: number) => {
          return (
            <MDBCarouselItem itemId={index + 1} key={item}>
              {card_Item.map(
                ({ title, text, button, image }: any, index: number) => {
                  return (
                    <MDBCol className="float-left" md="4" key={index}>
                      <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={image} />
                        <MDBCardBody>
                          <MDBCardTitle>{title}</MDBCardTitle>
                          <MDBCardText>{text}</MDBCardText>
                          <MDBBtn color="primary">{button}</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  )
                }
              )}
            </MDBCarouselItem>
          )
        })}
      </MDBRow>
    </MDBCarouselInner>
  )
}

export default CarouselCard
