import TagName from '@components/atoms/TagName'
import cx from 'classnames'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBView,
} from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'
const PostRelated = () => {
  const router = useRouter()
  const { cate, subcate, post } = router.query
  const [data, setdata] = useState([])

  useEffect(() => {
    const getdata = async () => {
      if (post) {
        const url = `${DOMAIN_env}/posts?_sort=updated_at:DESC&_limit=3&subcategories.slug=${subcate}&slug_nin=${post}`
        const x = await fetch(url)
        const dta = await x.json()
        setdata(dta)
      } else {
        const url = `${DOMAIN_env}/posts?_sort=updated_at:DESC&_limit=3&categories.slug=${cate}&slug_nin=${subcate}`
        const x = await fetch(url)
        const dta = await x.json()
        setdata(dta)
      }
    }
    getdata()
  }, [router])

  const active = data.length ? '' : ' d-none'
  return (
    <MDBRow>
      <MDBCol md="12" sm="12" className="mb-4">
        <TagName element="h4" className={styles['line-after'] + active}>
          <span className="text-uppercase">Tin cùng chuyên mục</span>
        </TagName>
      </MDBCol>
      <MDBCol>
        <MDBRow className={styles['list-news-detail']}>
          {data?.map(({ id, title, image, slug }: any) => {
            const img = image[0]
              ? `${DOMAIN_env + image[0].url}`
              : '/img/imgweb/670x402.jpg'
            return (
              <MDBCol md="4" className={cx(styles.grid_card, 'mb-3')} key={id}>
                <MDBCard narrow>
                  <MDBView cascade>
                    <Link
                      href={
                        subcate
                          ? {
                              pathname: '/[cate]/[subcate]/[post]',
                              query: { cate, subcate, post: slug },
                            }
                          : {
                              pathname: '/[cate]/[subcate]/[]',
                              query: { cate, subcate: slug },
                            }
                      }
                    >
                      <a>
                        <Image
                          src={img}
                          width="670"
                          height="402"
                          objectFit="cover"
                          layout="intrinsic"
                        />
                      </a>
                    </Link>
                  </MDBView>
                  <MDBCardBody>
                    <MDBCardText className={styles.content}>
                      <Link
                        href={
                          subcate
                            ? {
                                pathname: '/[cate]/[subcate]/[post]',
                                query: { cate, subcate, post: slug },
                              }
                            : {
                                pathname: '/[cate]/[subcate]',
                                query: { cate, subcate: slug },
                              }
                        }
                      >
                        <a>{title}</a>
                      </Link>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
          })}
        </MDBRow>
      </MDBCol>
    </MDBRow>
  )
}

export default PostRelated
