import styles from './style.module.scss'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { Icon } from '@components/icon/Icon'
import cx from 'classnames'
import Link from 'next/link'
const TopHead = () => {
  return (
    <div className={cx('d-none d-lg-block', styles['header-top'])}>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <div
              className={cx(
                'd-flex align-items-center justify-content-between',
                styles['header-top-wapper']
              )}
            >
              <div className={styles['header-top__left']}>
                <Icon name={'map'} /> 84 Thành Thái,Phường 12, Quận 10,TP.HCM
              </div>
              <div className={styles['header-top__right']}>
                <Link href="https://www.facebook.com/datkham.medpro.com.vn">
                  <a target="_blank">
                    <Icon name={'facebook'} />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCzxHLcsb6nz3odJe1Bjnjrw">
                  <a target="_blank">
                    <Icon name={'youtube'} />
                  </a>
                </Link>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default TopHead
