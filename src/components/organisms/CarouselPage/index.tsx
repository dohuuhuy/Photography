import { MDBCarousel, MDBContainer } from 'mdbreact'
import React from 'react'
import { arr_Image } from '../../../utils/sample-data'
import CarouselImage from '../../molecules/CarouselImage'
const Carousel = () => {
  return (
    <MDBContainer fluid className="w-100 vh-100 p-0">
      <MDBCarousel
        interval={2500}
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
      >
        <CarouselImage list_image={arr_Image} />
      </MDBCarousel>
    </MDBContainer>
  )
}

export default Carousel
