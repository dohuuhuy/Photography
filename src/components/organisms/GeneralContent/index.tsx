import { Link_subcate } from '@components/atoms/Link'
import { Icon } from '@components/icon/Icon'
import Pagination from '@components/molecules/Pagination'
import cx from 'classnames'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { get_name_general, get_path } from 'src/controllers/api'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'
import Moment from 'moment'
const curDay = Moment().format('dddd')

export interface Props {
  className?: string
  list_general?: any
  Total?: number
  Page?: number
}
const GeneralContent = ({ list_general, Total, Page }: Props) => {
  const router = useRouter()
  const { cate }: any = router.query
  const x = get_path(cate)
  const { path }: any = x
  const nameGeneral = get_name_general(path)
  return (
    <MDBContainer className="m-0 mt-5">
      <MDBRow className={styles['searchresult']}>
        <MDBCol sm="12">
          <MDBRow className={styles['searchresult-head']}>
            <MDBCol md="6" className={cx(styles['searchresult-title'], 'p-0')}>
              <h4>Danh Sách {nameGeneral} </h4>
            </MDBCol>
            <MDBCol
              md="6"
              className={cx(styles['searchresult-select'], 'p-0', 'd-none-xs')}
            >
              <select>
                <option value="Sort By:">Tìm theo:</option>
                <option value="Sort By:">Last created on top</option>
                <option value="Sort By:">Thứ tự (A-Z)</option>
                <option value="Sort By:">Thứ tự (Z-A)</option>
              </select>
            </MDBCol>
          </MDBRow>
          {list_general === null ? (
            <em>Đang cập nhật ... </em>
          ) : (
            List_Post(list_general, cate)
          )}
        </MDBCol>
        <MDBCol className={styles['pagination']}>
          <Pagination Total={Total} Page={Page} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default GeneralContent

const List_Post = (list_general: any, cate: string) =>
  list_general &&
  list_general.map(
    ({
      id,
      name,
      address,
      workingTime,
      tags,
      href_booking,
      href_general,
      description,
      image,
      degree,
      specialist,
    }: any) => {
      const url_img = image[0]
        ? `${DOMAIN_env + image[0]?.url}`
        : '/img/imgweb/img-16.jpg'

      const set = cate === 'bac-si'
      const set_none = address && set ? '' : ' d-none'
      const set_dnone = address && !set ? '' : ' d-none'

      return (
        <MDBRow className={styles['searchresult-grid']} key={id}>
          <MDBCol md="7" className={cx(styles['searchresult-searchvtwo'])}>
            <MDBRow>
              <MDBCol md="4">
                <figure className="dc-docpostimg">
                  <Link_subcate cate={cate} subcate={href_general}>
                    <Image
                      src={url_img}
                      width="100"
                      height="100"
                      objectFit="cover"
                    />
                  </Link_subcate>
                </figure>
              </MDBCol>
              <MDBCol md="8" className={styles['dc-title']}>
                <h3>
                  <Link_subcate cate={cate} subcate={href_general}>
                    {name}
                  </Link_subcate>
                </h3>
                <div className={styles.diachi + set_dnone}>
                  <Icon name="map" />
                  {address}
                </div>

                <div className={styles.diachi + set_none}>
                  {`Học hàm/học vị: ${degree}`}
                </div>
                <div
                  className={styles.diachi + set_none}
                >{`Chuyên khoa: ${specialist}`}</div>

                <div
                  className={
                    styles.lich + (workingTime.length ? '' : ' d-none')
                  }
                >
                  <Icon name="calendar" />
                  {workingTime &&
                    workingTime?.map(
                      ({ id, NameDay, workingDay }: any, index: number) => {
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
                </div>
                <div
                  className={styles.diachi + set_none}
                >{`Đơn vị công tác: ${address}`}</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol
                className={tags.length && cate !== 'bac-si' ? '' : 'd-none'}
              >
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
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="5" className={cx(styles['searchresult-doclocation'])}>
            <>
              <ul
                className={
                  styles['dc-docinfo'] + (description ? '' : ' d-none')
                }
              >
                <li>
                  <em>
                    <ReactMarkdown source={description} />
                  </em>
                </li>
              </ul>

              <div className={cx(styles['dc-btnarea'])}>
                <a
                  target="_blank"
                  href={href_booking || '/'}
                  className={cx(styles['dc-btn'])}
                >
                  Đặt khám
                </a>
              </div>
            </>
          </MDBCol>
        </MDBRow>
      )
    }
  )
