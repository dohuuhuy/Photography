// import cx from 'classnames'

import { Icon } from '@components/icon/Icon'
import { MDBBtn, MDBCol, MDBRow } from 'mdbreact'
import { FacebookShareButton } from 'next-share'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import styles from './style.module.scss'

const RowShare = ({ name = '' }: any) => {
  return (
    <>
      <MDBRow className="border-bottom border-dark mt-5 mb-5">
        <MDBCol>
          <MDBBtn
            size="sm"
            color="blue"
            onClick={() => {
              Router.back()
            }}
          >
            Quay về
          </MDBBtn>
        </MDBCol>
        <MDBCol className="text-right">
          <ul className={styles.box_share + ' nav justify-content-end'}>
            <li className="nav-item"> Share: </li>
            <li className="nav-item">
              <FacebookShareButton
                url={'https://news.medpro.com.vn/'}
                quote={name}
                hashtag={'#TinTucMedpro'}
              >
                <Icon name={'facebook'} />
              </FacebookShareButton>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a target="_blank">
                  <Icon name={'google'} />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a target="_blank">
                  <Icon name={'zalo'} />
                </a>
              </Link>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default RowShare
