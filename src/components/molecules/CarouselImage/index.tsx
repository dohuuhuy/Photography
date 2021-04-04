import {
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from 'mdbreact'
import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'

interface Props {
  list_image?: any
}
const CarouselImage = ({ list_image }: Props) => {
  return (
    <MDBCarouselInner>
      {list_image.map(({ image }: any, index: number) => {
        return (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <MDBRow>
              <MDBCol md="8" className="p-0">
                <MDBView zoom={true}>
                  <img className="d-block w-100 vh-100" src={image} />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCol>
              <MDBCol md="4" className="p-0">
                <div className="display-tc js-fullheight">
                  <h2 className={styles.number}>
                    0{index + 1}/0{list_image.length}
                  </h2>
                  <div className={styles.text_inner}>
                    <div className={styles.desc}>
                      <span className={styles.tag}>Welcome</span>
                      <h2>Photography is on it's way.</h2>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        <Link href="/">
                          <a className={styles.btn_view}>
                            View Galleries
                            <MDBIcon icon="long-arrow-alt-right" />
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>
        )
      })}
    </MDBCarouselInner>
  )
}
export default CarouselImage
