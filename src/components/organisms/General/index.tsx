// import { Icon } from '@components/icon/Icon'
// import cx from 'classnames'
import { Link_subcate } from '@components/atoms/Link'
import { MDBBtn, MDBCol, MDBRow, MDBAnimation } from 'mdbreact'
import Moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { get_path } from 'src/controllers/api'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'
const curDay = Moment().format('dddd')
export interface Props {
  className?: string
  top_general?: any
}
const General = ({ top_general }: Props) => {
  if (!top_general) return null

  const router = useRouter()
  const { cate } = router.query
  const x = get_path(cate)
  const { path }: any = x

  const {
    name,
    description,
    image,
    href_booking,
    href_general,
    address,
    workingTime,
    specialist,
    degree,
    tags,
  }: any = top_general

  const url_img = image[0]
    ? `${DOMAIN_env}${image[0].url}`
    : '/img/imgweb/255x255.jpg'

  const set = cate === 'bac-si'

  return (
    <MDBAnimation type="fadeIn" className={styles.hospital_hot}>
      <div className={styles['hospital_hot-img']}>
        <Image
          src={url_img}
          objectFit="cover"
          layout="responsive"
          width="255"
          height="255"
        />
      </div>
      <div className={styles['hospital_info']}>
        <h2>
          <Link_subcate cate={path} subcate={href_general}>
            {name}
          </Link_subcate>
        </h2>
        <ul className={styles['dc-docinfo']}>
          <li className={degree && set ? '' : 'd-none'}>
            Học hàm/học vị: &ensp;{degree}
          </li>
          <li className={specialist && set ? '' : 'd-none'}>
            Chuyên khoa: &ensp;{specialist}
          </li>
          <li className={workingTime.length ? '' : 'd-none'}>
            <em>
              Thời gian làm việc: &ensp;
              {workingTime &&
                workingTime.map(
                  ({ id, workingDay, NameDay }: any, index: number) => {
                    const x = curDay === workingDay ? 'text-success' : ''

                    return (
                      <em className={x} key={id}>
                        {`${NameDay}${
                          index === workingTime.length - 1 ? '' : ' ,'
                        } `}
                      </em>
                    )
                  }
                )}
            </em>
          </li>
          <li className={address ? '' : 'd-none'}>
            {set ? 'Đơn vị công tác' : 'Địa chỉ'} : &ensp;
            {address}
          </li>

          <li className={tags.length && !set ? '' : 'd-none'}>
            <ul className={styles.sigle_tags + ' nav justify-content'}>
              <li className="nav-item"> Dịch vụ khám: </li>
              {tags &&
                tags?.map(({ id, NameTag }: any, index: number) => {
                  return NameTag && index <= 5 ? (
                    <li className="nav-item" key={id}>
                      {NameTag}
                    </li>
                  ) : null
                })}
            </ul>
          </li>
        </ul>
        <MDBRow className={styles['dc-docsingle-header]']}>
          <MDBCol md="12">
            <MDBRow className={styles['dc-description']}>
              <MDBCol>
                <ReactMarkdown source={description} />
              </MDBCol>
            </MDBRow>
            <MDBRow className={styles['dc-btnarea']}>
              <MDBCol className="text-center">
                <Link href={href_booking || '/'}>
                  <a className={styles['dc-btn']}>
                    <MDBBtn color="blue" size="sm">
                      Đặt khám nhanh
                    </MDBBtn>
                  </a>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBAnimation>
  )
}

export default General
