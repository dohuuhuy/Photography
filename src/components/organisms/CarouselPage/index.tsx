import { MDBCarousel } from 'mdbreact'
import React from 'react'
import { arr_Image } from '../../../utils/sample-data'
import CarouselImage from '../../molecules/CarouselImage'
const Carousel = () => {
  return (
    <>
      <MDBCarousel
        interval={2500}
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
      >
        <CarouselImage list_image={arr_Image} />
      </MDBCarousel>
    </>
  )
}

export default Carousel
