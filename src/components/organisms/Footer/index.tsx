import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact'
import styles from './style.module.scss'
import Link from 'next/link'
import { Icon } from '@components/icon/Icon'
import Image from 'next/image'
const Footer = () => {
  return (
    <MDBAnimation type="fadeIn" className={styles.footer}>
      <div className={styles.menuAddress}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">
              <Link href="/">
                <a className={styles.img_link}>
                  <Image src="/images/logo_white.svg" width="250" height="60" />
                </a>
              </Link>
              <p className="m-0 text-white">
                Giải pháp đăng ký khám bệnh trực tuyến | Thanh toán viện phí
                không cần tiền mặt
              </p>
            </MDBCol>
            <MDBCol md="4">
              <div className={styles.connect_social}>
                <div>
                  <b>Tải ứng dụng MedPro</b>
                </div>
                <div className={styles.link_download}>
                  <a
                    href="https://play.google.com/store/apps/details?id=vn.com.medpro"
                    target="_blank"
                  >
                    <Image
                      src="/img/logo/googleplay.svg"
                      width="120"
                      height="60"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/pa/app/%C4%91%C4%83ng-k%C3%BD-kh%C3%A1m-b%E1%BB%87nh-tr%E1%BB%B1c-tuy%E1%BA%BFn/id1481561748"
                    target="_blank"
                  >
                    <Image
                      src="/img/logo/appstore.svg"
                      width="120"
                      height="60"
                    />
                  </a>
                </div>

                <div className={styles.text_socical}>
                  <div> Kết nối với chúng tôi trên mạng xã hội !</div>
                  <div className={styles.social_footer}>
                    <a
                      href="https://www.facebook.com/datkham.medpro.com.vn"
                      target="_blank"
                    >
                      <Icon name={'facebook'} />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCzxHLcsb6nz3odJe1Bjnjrw"
                      target="_blank"
                    >
                      <Icon name={'youtube'} />
                    </a>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <ul className={styles.menubarFooter}>
                <li className={styles.menubarFooter__item}>
                  <div className={styles.icon}>
                    <Icon name={'map'} />
                  </div>
                  <div className={styles.text}>
                    84 Thành Thái, Phường 12, Quận 10, TPHCM
                  </div>
                </li>
                <li className={styles.menubarFooter__item}>
                  <div className={styles.icon}>
                    <Icon name={'phone'} />
                  </div>
                  <div className={styles.text}>
                    <div>Thứ 2 đến thứ 6 : 07:30 - 17:00</div>
                    <div>Thứ 7 : 07:30 - 12:00</div>
                    <b> 19002267 - 19002115 </b>
                  </div>
                </li>
                <li className={styles.menubarFooter__item}>
                  <div className={styles.icon}>
                    <Icon name={'email'} />
                  </div>
                  <div className={styles.text}>
                    Quý khách có câu hỏi? <br /> contact@medpro.com.vn
                  </div>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className={styles.authorFooter}>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <div className={styles.authorFooter__item}>
                <div>Bản quyền thuộc về MedPro</div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBAnimation>
  )
}

export default Footer
