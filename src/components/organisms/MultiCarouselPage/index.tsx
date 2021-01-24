import CarouselCard from '@components/molecules/CarouselCard'
import { MDBCarousel, MDBContainer } from 'mdbreact'
import { useRouter } from 'next/router'
import React from 'react'
import { arr_Carousel } from 'src/utils/sample-data'

const MultiCarouselPage = () => {
  const router = useRouter()
  const array_hidden = ['/']
  return !array_hidden.includes(router.asPath) ? null : (
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
