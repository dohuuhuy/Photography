import { MDBCarousel, MDBContainer } from 'mdbreact'
import { useRouter } from 'next/router'
import React from 'react'
import { arr_Image } from '../../../utils/sample-data'
import CarouselImage from '../../molecules/CarouselImage'

const CarouselPage = () => {
  const router = useRouter()
  const array_hidden = ['/about']
  return !array_hidden.includes(router.asPath) ? null : (
    <MDBContainer fluid>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <CarouselImage image={arr_Image} />
      </MDBCarousel>
    </MDBContainer>
  )
}

export default CarouselPage
