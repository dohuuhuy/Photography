import styles from './style.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { MDBAnimation } from 'mdbreact'

const HowWork = ({}) => {
  return (
    <MDBAnimation type="fadeIn" className={styles['dc-haslayout']}>
      <div className={styles['dc-workholder']}>
        <div className="container">
          <div className="row justify-content-center align-self-center">
            <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2">
              <div
                className={cx(
                  styles['dc-sectionhead'],
                  styles['dc-text-center']
                )}
              >
                <div className={styles['dc-sectiontitle']}>
                  <h2>
                    <span>Medpro</span>
                  </h2>
                  <p>Giải pháp đăng ký khám bệnh trực tuyến</p>
                </div>
                <div className={styles['dc-description']}>
                  <p>
                    Medpro là giải pháp nhằm kết nối bệnh viện với người dùng có
                    nhu cầu đăng ký khám bệnh có thể thực hiện việc đăng ký khám
                    bệnh hoàn toàn trực tuyến ở mọi lúc mọi nơi, mà không cần
                    phải đến bệnh viện đề xếp hàng và chờ đợi. Giúp bệnh nhân có
                    kế hoạch khám chữa bệnh chủ động, rút ngắn thời gian chờ
                    đợi, góp phần nâng cao sức khoẻ bệnh nhân.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['dc-workdetails-holder']}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div
                className={cx(
                  styles['dc-workdetails'],
                  styles['dc-workdetails-border'],
                  styles['none']
                )}
              >
                <div className={styles['dc-workdetail']}>
                  <figure>
                    <Image
                      src="/images/dat-kham.svg"
                      width="100"
                      height="100"
                      layout="responsive"
                      alt=""
                    />
                  </figure>
                </div>
                <div className={styles['dc-title']}>
                  <h3>
                    <a href="#!">
                      <span>Đặt khám nhanh chóng</span>
                    </a>
                  </h3>
                  <p>
                    Bệnh nhân chủ động chọn thông tin đặt khám (ngày khám và giờ
                    khám)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div
                className={cx(
                  styles['dc-workdetails'],
                  styles['dc-workdetails-border']
                )}
              >
                <div className={styles['dc-workdetail']}>
                  <figure>
                    <Image
                      src="/images/thanh-toan.svg"
                      width="100"
                      height="100"
                      layout="responsive"
                      alt=""
                    />
                  </figure>
                </div>
                <div className={styles['dc-title']}>
                  <h3>
                    <a href="#!">
                      <span>Thanh toán dễ dàng</span>
                    </a>
                  </h3>
                  <p>
                    Bệnh nhân chủ động chọn thông tin đặt khám (ngày khám và giờ
                    khám)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div
                className={cx(
                  styles['dc-workdetails'],
                  styles['dc-workdetails-border']
                )}
              >
                <div className={styles['dc-workdetail']}>
                  <figure>
                    <Image
                      src="/images/phieu-kham-benh.svg"
                      width="100"
                      height="100"
                      layout="responsive"
                      alt=""
                    />
                  </figure>
                </div>
                <div className={styles['dc-title']}>
                  <h3>
                    <a href="#!">
                      <span>Nhận phiếu trực tuyến</span>
                    </a>
                  </h3>
                  <p>
                    Bệnh nhân sẽ nhận phiếu khám trực tuyến ngay trên phần mềm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MDBAnimation>
  )
}
export default HowWork
