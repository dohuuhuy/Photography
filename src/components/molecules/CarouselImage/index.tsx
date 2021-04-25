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
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

interface Props {
  list_image?: any
}
const CarouselImage = ({ list_image }: Props) => {
  return (
    <MDBCarouselInner>
      {list_image.map(
        (
          { image, caption, text, tag, button, text_button, link_button }: any,
          index: number,
        ) => {
          return (
            <MDBCarouselItem itemId={index + 1} key={index}>
              <MDBRow>
                <MDBCol md="8" className="p-0">
                  <MDBView
                    rounded
                    hover
                    waves
                    zoom
                    className="d-block w-100 vh-100"
                  >
                    <Image src={image} layout="fill" />
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
                        <span className={styles.tag}>{tag}</span>
                        <h2>
                          <Typewriter
                            options={{
                              loop: true,
                            }}
                            onInit={(typewriter) => {
                              typewriter
                                .typeString(caption)
                                .pauseFor(500)
                                .start()
                            }}
                          />
                        </h2>
                        <p>{text}</p>
                        <div className={button ? '' : 'd-none'}>
                          <Link href={link_button}>
                            <a className={styles.btn_view}>
                              {text_button}
                              <MDBIcon icon="arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
          )
        },
      )}
    </MDBCarouselInner>
  )
}
export default CarouselImage
