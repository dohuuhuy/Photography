import CarouselCard from '@components/molecules/CarouselCard'
import { MDBCarousel, MDBContainer } from 'mdbreact'
import React from 'react'
import { arr_Carousel } from 'src/utils/sample-data'

const MultiCarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <CarouselCard array_Carousel={arr_Carousel} />
      </MDBCarousel>
    </MDBContainer>
  )
}

export default MultiCarouselPage
