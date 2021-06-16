import cx from 'classnames'
import {
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect'
import styles from './style.module.scss'

interface Props {
  list_image?: any
}
const CarouselImage = ({ list_image }: Props) => {
  return (
    <MDBCarouselInner className={styles.CarouselImage}>
      {list_image.map(
        (
          { image, caption, text, tag, button, text_button, link_button }: any,
          index: number,
        ) => {
          return (
            <MDBCarouselItem itemId={index + 1} key={index}>
              <MDBRow>
                <MDBCol md="8" className={cx(styles.left)}>
                  <MDBView className={cx(styles.view, 'w-100')}>
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="fill"
                      alt={image}
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCol>
                <MDBCol md="4" className={cx(styles.right)}>
                  <section>
                    <h2 className={styles.number}>
                      0{index + 1}/0{list_image.length}
                    </h2>
                    <div className={styles.text_inner}>
                      <div className={styles.desc}>
                        <span className={styles.tag}>{tag}</span>
                        <h2 className={styles.typewriter}>
                          <Typewriter
                            options={{
                              loop: true,
                            }}
                            onInit={(typewriter: any) => {
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
                            <span className={styles.btn_view}>
                              {text_button}
                              <MDBIcon icon="arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
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
