import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBView,
} from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Produc_interface } from 'src/interfaces'
import { list_product } from 'src/utils/sample-data'
import styles from './style.module.scss'

const Blog = () => {
  return (
    <section className="text-center my-5 ">
      <h2 className={styles.title}>Sản phẩm</h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lĩnh vực về mãng y tế và template CV
      </p>
      <MDBRow>
        {list_product?.map(
          (
            {
              tag,
              title,
              description,
              link_product,
              link_img,
            }: Produc_interface,
            i: number,
          ) => {
            return (
              <MDBCol lg="4" md="12" className={styles.card_product} key={i}>
                <MDBCard wide cascade>
                  <MDBView cascade>
                    <Image
                      loading="eager"
                      className="card-img-top"
                      src={link_img}
                      width="350"
                      height="200"
                      layout="responsive"
                      alt={link_img}
                    />
                  </MDBView>

                  <MDBCardBody cascade className="text-center">
                    <Link href={link_product}>
                      <h5 className="text-muted">{tag}</h5>
                    </Link>

                    <MDBCardTitle>
                      <strong>
                        <Link href={link_product}>{title}</Link>
                      </strong>
                    </MDBCardTitle>

                    <MDBCardText>{description}</MDBCardText>

                    <MDBCol md="12" className="d-flex justify-content-center">
                      <a href="!#" className="px-2 fa-lg li-ic">
                        <MDBIcon fab icon="linkedin-in"></MDBIcon>
                      </a>

                      <a href="!#" className="px-2 fa-lg tw-ic">
                        <MDBIcon fab icon="twitter"></MDBIcon>
                      </a>

                      <a href="!#" className="px-2 fa-lg fb-ic">
                        <MDBIcon fab icon="facebook-f"></MDBIcon>
                      </a>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
          },
        )}
      </MDBRow>
    </section>
  )
}

export default Blog
