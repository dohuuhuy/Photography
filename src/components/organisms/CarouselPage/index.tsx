import { MDBCarousel, MDBContainer } from 'mdbreact'
import React from 'react'
import { arr_Image } from '../../../utils/sample-data'
import dynamic from 'next/dynamic'
const CarouselImage = dynamic(
  () => import('@components/molecules/CarouselImage'),
)

const Carousel = () => {
  return (
    <MDBContainer fluid style={{ minHeight: '900px', marginTop: '6rem' }}>
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
