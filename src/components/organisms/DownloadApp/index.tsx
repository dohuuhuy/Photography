import cx from 'classnames'
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
import Image from 'next/image'
import styles from './style.module.scss'
const DownloadApp = ({}) => {
  return (
    <MDBAnimation type="fadeIn" className={cx('d-flex', styles.downloadApp)}>
      <MDBContainer className="d-flex">
        <MDBRow className="w-100">

          <MDBCol
            md="6"
            sm="6"

            className={cx('offset-sm-6',
              styles.content,
              'justify-content-center align-self-center'
            )}
          >
            <MDBRow>
              <MDBCol md="12">
                <h2 className={styles.title_downapp}>Tải ứng dụng</h2>
              </MDBCol>
              <MDBCol md="12">
                <p>
                  Đặt khám và thanh toán trực tuyến, khởi đầu cho cuộc sống hiện đại.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <ul className={styles.appicons}>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=vn.com.medpro"
                      target="_blank"
                    >
                      <Image
                        src="/img/logo/googleplay.svg"
                        width="160"
                        height="53"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://apps.apple.com/pa/app/%C4%91%C4%83ng-k%C3%BD-kh%C3%A1m-b%E1%BB%87nh-tr%E1%BB%B1c-tuy%E1%BA%BFn/id1481561748"
                      target="_blank"
                    >
                      <Image
                        src="/img/logo/appstore.svg"
                        width="160"
                        height="53"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBAnimation>
  )
}
export default DownloadApp
