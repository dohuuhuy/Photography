import React from 'react'
import {
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from 'mdbreact'

interface Props {
  image?: any
}
const CarouselImage = ({ image }: Props) => {
  return (
    <MDBCarouselInner>
      {image.map(({ caption, text, image }: any, index: number) => {
        return (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <MDBView>
              <img className="d-block w-100" src={image} />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">{caption}</h3>
              <p>{text}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        )
      })}
    </MDBCarouselInner>
  )
}
export default CarouselImage
