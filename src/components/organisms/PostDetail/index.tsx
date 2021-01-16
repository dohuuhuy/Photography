import PostRelated from '@components/molecules/PostRelated'
import RowShare from '@components/molecules/RowShare'
import cx from 'classnames'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Moment from 'moment'
import Error404 from 'pages/errors/404'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'
const isHtml = require('is-html')
interface Props {
  className?: string
  details_Post?: string
}
const PostDetail = ({ className, details_Post }: Props) => {
  if (!details_Post) return <Error404 />
  const {
    title,
    description,
    content,
    created_at,
    updated_at,
  }: any = details_Post

  let replacecontent = content?.replace(
    /\/uploads\//g,
    `${DOMAIN_env}/uploads/`
  )
  return (
    <MDBContainer className={cx(styles['article-detail'], className)}>
      <MDBRow>
        <MDBCol>
          <h1>{title}</h1>
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

      <MDBRow className={description ? '' : ' d-none'}>
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

      <RowShare name={title} />

      <PostRelated />
    </MDBContainer>
  )
}

export default PostDetail
