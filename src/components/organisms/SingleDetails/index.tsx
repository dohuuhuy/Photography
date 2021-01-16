import { Icon } from '@components/icon/Icon'
import RowShare from '@components/molecules/RowShare'
import cx from 'classnames'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'
const isHtml = require('is-html')

interface Props {
  className?: string
  single?: string
}
const SingleDetails = ({ className, single }: Props) => {
  const router = useRouter()
  const { cate } = router.query

  if (!single) return <em>Đang cập nhật ...</em>
  const {
    name,
    description,
    content,
    created_at,
    updated_at,
    address,
  }: any = single

  let replacecontent = content?.replace(
    /\/uploads\//g,
    `${DOMAIN_env}/uploads/`
  )
  return (
    <MDBContainer className={cx(styles['article-detail'], className)}>
      <MDBRow>
        <MDBCol>
          <h1>{name}</h1>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <p className={styles['time-news']}>
            {Moment(updated_at ? updated_at : created_at).format(
              'DD/MM/YYYY, h:mm'
            )}
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="12" className="d-inline">
          <Icon name="map" className="mr-2" />
          <strong>{cate === 'bac-si' ? 'Đơn vị công tác' : 'Địa chỉ'}: </strong>
          <em className="text-primary">{address}</em>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <blockquote>
            {isHtml(content) ? (
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            ) : (
              <ReactMarkdown source={description} />
            )}
          </blockquote>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-3">
        <MDBCol className={styles.single_content}>
          {isHtml(content) ? (
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          ) : (
            <ReactMarkdown source={replacecontent} />
          )}
        </MDBCol>
      </MDBRow>

      <RowShare />
    </MDBContainer>
  )
}

export default SingleDetails
