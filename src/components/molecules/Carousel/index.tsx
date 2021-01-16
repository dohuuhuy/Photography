import cx from 'classnames'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
} from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'

const Carousel = ({ className }: any) => {
  const [banners, setbanners] = React.useState([])
  React.useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch(`${DOMAIN_env}/banners`)
    const dta = await res.json()
    setbanners(dta)
  }

  return (
    <MDBCarousel
      className={cx(styles.thumb, styles[className])}
      activeItem={0}
      length={Number(banners.length)}
      showControls
      showIndicators
      mobileGesture
      onHoverStop
    >
      <MDBCarouselInner>{renderimgs(banners)}</MDBCarouselInner>
    </MDBCarousel>
  )
}
export default Carousel

const renderimgs = (arrayImg: any) => {
  return (
    arrayImg &&
    arrayImg?.map(
      ({ image, alt, title, description, href_banner }: any, index: number) => {
        return (
          <MDBCarouselItem itemId={index} key={index}>
            <div className={styles['inner-img']}>
              {!title && !description ? null : (
                <MDBContainer>
                  <MDBCard className={cx(styles.fadeInDown, styles.content)}>
                    <MDBCardBody>
                      <MDBCardTitle className={styles.head_banner}>
                        {title}
                      </MDBCardTitle>
                      <MDBCardText className={styles.head_description}>
                        {description}
                      </MDBCardText>
                      {href_banner ? (
                        <Link href={href_banner || '#'}>
                          <a target="_blank">
                            <MDBBtn color="blue" size="sm">
                              xem thêm
                            </MDBBtn>
                          </a>
                        </Link>
                      ) : null}
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              )}

              <Image
                className="d-block w-100"
                src={`${DOMAIN_env}${image[0]?.url}`}
                alt={alt}
                height="500"
                width="2048"
                objectFit="cover"
              />
            </div>
          </MDBCarouselItem>
        )
      }
    )
  )
}
