import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from 'mdbreact'
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
        {list_product.map(
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
                <MDBCard wide ecommerce>
                  <MDBCardImage cascade src={link_img} top alt="sample photo" />
                  <MDBCardBody cascade className="text-center">
                    <Link href={link_product}>
                      <a className="text-muted">
                        <h5>{tag}</h5>
                      </a>
                    </Link>
                    <MDBCardTitle>
                      <strong>
                        <Link href={link_product}>
                          <a>{title}</a>
                        </Link>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>{description}</MDBCardText>
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
