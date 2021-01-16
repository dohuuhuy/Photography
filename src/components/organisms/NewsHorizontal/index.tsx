import cx from 'classnames'
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBView,
  MDBAnimation,
} from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'

const NewsHorizontal = () => {
  const i = useSelector((state: any) => state.include)
  const { list_post } = i

  // return null
  return (
    <MDBAnimation type="fadeIn" reveal={true} className={styles.section_new}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="text-center">
            <h3 className={styles.title_news}>
              <span>Kiến thức y khoa</span>
            </h3>
          </MDBCol>
          <MDBCol md="12" className="mt-4">
            <MDBRow>
              {list_post.length ? (
                list_post?.map(
                  ({
                    id,
                    title,
                    image,
                    categories,
                    slug,
                    subcategories,
                  }: any) => {
                    const img = image[0]
                      ? `${DOMAIN_env + image[0]?.url}`
                      : '/img/imgweb/tin-tuc-medpro.jpg'
                    return (
                      <MDBCol
                        className={cx(styles.grid_card, 'mb-3')}
                        md="3"
                        key={id}
                      >
                        <MDBCard narrow>
                          <Link_News
                            categories={categories[0]?.slug}
                            subcategories={subcategories[0]?.slug}
                            post={slug}
                          >
                            <MDBView cascade>
                              <Image
                                src={img}
                                width="670"
                                height="402"
                                objectFit="cover"
                                layout="intrinsic"
                              />
                            </MDBView>
                          </Link_News>
                          <MDBCardBody className={styles.content}>
                            <MDBCardText>
                              <Link_News
                                categories={categories[0]?.slug}
                                subcategories={subcategories[0]?.slug}
                                post={slug}
                              >
                                {title}
                              </Link_News>
                            </MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter>
                            <Link_News2
                              categories={categories[0]?.slug}
                              subcategories={subcategories[0]?.slug}
                              post={slug}
                            >
                              {subcategories[0]?.title
                                ? subcategories[0]?.title
                                : categories[0]?.title}
                            </Link_News2>
                          </MDBCardFooter>
                        </MDBCard>
                      </MDBCol>
                    )
                  }
                )
              ) : (
                <em>Đang cập nhật ...</em>
              )}
            </MDBRow>
          </MDBCol>
          <MDBCol className={cx(styles.view_more, 'text-center', 'mt-3 mb-3')}>
            <Link
              href={{
                pathname: '/[cate]',
                query: { cate: 'kien-thuc-y-khoa' },
              }}
            >
              <a>Xem thêm</a>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBAnimation>
  )
}

export default NewsHorizontal

const Link_News2 = ({
  children,
  categories: cate,
  subcategories: subcate,
}: any) => {
  if (!subcate) {
    return (
      <Link
        href={{
          pathname: '/[cate]',
          query: { cate },
        }}
      >
        <a className="text-primary">{children} </a>
      </Link>
    )
  }

  return (
    <Link
      href={{
        pathname: '/[cate]/[subcate]',
        query: { cate, subcate },
      }}
    >
      <a className="text-primary">{children} </a>
    </Link>
  )
}

const Link_News = ({
  children,
  categories: cate,
  subcategories: subcate,
  post,
}: any) => {
  if (!subcate) {
    return (
      <Link
        href={{
          pathname: '/[cate]/[subcate]',
          query: { cate, subcate: post },
        }}
      >
        <a>{children} </a>
      </Link>
    )
  }

  return (
    <Link
      href={{
        pathname: '/[cate]/[subcate]/[post]',
        query: { cate, subcate, post },
      }}
    >
      <a>{children} </a>
    </Link>
  )
}
