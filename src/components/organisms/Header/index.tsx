import Menu from '@components/molecules/Menubar'
import TopHead from '@components/molecules/TopHead'
import cx from 'classnames'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'
const Header = () => {
  return (
    <div className="header">
      <TopHead />
      {/* logo - search  */}
      <MDBContainer className="d-none d-lg-block">
        <MDBRow>
          <MDBCol>
            <div
              className={cx(
                'd-flex align-items-center justify-content-between',
                styles.header_center
              )}
            >
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <img src={'/images/logo.svg'} alt="" />
                  </a>
                </Link>
              </div>
              <div className={styles.top_utilities}>
                <a target="_blank" href="https://medpro.com.vn/">
                  <Image
                    src="/img/imgweb/ads-top.png"
                    alt=""
                    layout="fill"
                    objectFit="scale-down"
                    objectPosition="right"
                  />
                </a>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Menu />
    </div>
  )
}

export default Header
