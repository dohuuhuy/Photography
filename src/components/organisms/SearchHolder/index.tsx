import cx from 'classnames'
import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import { MDBAnimation } from 'mdbreact'

const SearchHolder = () => {
  // const [searchTerm, setSearchTerm] = React.useState('')
  // const [searchResults, setSearchResults] = React.useState([])
  // const handleChange = (event: {
  //   target: { value: React.SetStateAction<string> }
  // }) => {
  //   setSearchTerm(event.target.value)
  // }
  // useEffect(() => {
  //   const results: any = people.filter((person) =>
  //     person.toLowerCase().includes(searchTerm)
  //   )
  //   setSearchResults(results)
  // }, [searchTerm])
  return (
    <MDBAnimation
      type="fadeIn"
      className={cx(styles['dc-searchholder'], styles['dc-haslayout'])}
    >
      {/* <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className={styles['dc-searchform-holder']}>
              <div className={styles['dc-advancedsearch']}>
                <div className={styles['dc-title']}>
                  <h2>Tìm kiếm nâng cao</h2>

                  <a href="/" className={styles['dc-docsearch']}>
                    <span className={styles['dc-advanceicon']}>
                      <i /> <i /> <i />
                    </span>
                    <span>
                      Advanced <br />
                      Search
                    </span>
                  </a>
                </div>
                <form
                  className={cx(
                    styles['dc-formtheme'],
                    styles['dc-form-advancedsearch']
                  )}
                >
                  <MDBRow>
                    <MDBCol md="6" className="mb-3">
                      <input
                        name="fname"
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm bệnh viện, phòng khám, bác sĩ"
                      
                      />
                   
                    </MDBCol>
                    <MDBCol md="4" className="mb-3">
                      <div className={styles['dc-select']}>
                        <select
                          className="chosen-select locations"
                          data-placeholder="Country"
                          name="locations"
                        >
                          <option>Chọn tỉnh/thành * </option>
                          {locations.map((item: any, index: number) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className={styles.btn_search}>
                      <a
                        type="button"
                        className="form-control btn-outline-primary text-center"
                      >
                        <Icon name="arrowright" />
                      </a>
                    </MDBCol>
                  </MDBRow>
                </form>
              </div>

              <div className={styles['dc-jointeamholder']}>
                <div className={styles['dc-jointeam']}>
                  <span className={styles['dc-jointeamnoti']}>
                    <i className="ti-light-bulb" />
                  </span>
                  <figure className={styles['dc-jointeamimg']}>
                    <img src={'/images/bs.jpg'} alt="" />
                  </figure>
                  <div className={styles['dc-jointeamcontent']}>
                    <h3>
                      <span>Bạn là bác sĩ</span>Tham gia đội ngủ với chúng tôi
                    </h3>
                    <Link href="/">
                      <a
                        className={cx(styles['dc-btn'], styles['dc-btnactive'])}
                      >
                        Tham gia
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="dc-haslayout">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className={styles['dc-doctorslider']}>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/register.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Đăng ký khám bệnh</h2>
                  <p className={styles['dc-btn']}>
                    Theo ngày, bác sĩ, giờ khám
                  </p>
                </div>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/tai-kham.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Tái khám</h2>
                  <p className={styles['dc-btn']}>Theo lịch hẹn của bác sĩ</p>
                </div>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/payment.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Thanh toán viện phí</h2>
                  <p className={styles['dc-btn']}>
                    Tạm ứng, xuất viện, chỉ định cận lâm sàng
                  </p>
                </div>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/hoadon.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Hoá đơn điện tử</h2>
                  <p className={styles['dc-btn']}>
                    Trả hoá đơn điện tử trực tuyến
                  </p>
                </div>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/ket-qua-can-lam-sang.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Kết quả cận lâm sàng</h2>
                  <p className={styles['dc-btn']}>
                    Tra cứu, hiển thị trực tiếp trên ứng dụng
                  </p>
                </div>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/chat.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Tư vấn sức khoẻ trực tuyến</h2>
                  <p className={styles['dc-btn']}>
                    Với các bác sĩ đầu ngành & chuyên gia
                  </p>
                </div>
                <div className={cx(styles['item'])}>
                  <div className={styles.image}>
                    <Image
                      src={'/images/ho-tro-dat-kham.svg'}
                      width="65"
                      height="65"
                      layout="responsive"
                      alt=""
                    />
                  </div>
                  <h2>Hỗ trợ đặt khám 19002115</h2>
                  <p className={styles['dc-btn']}>
                    Thân thiện, nhiệt tình, hết lòng vì bệnh nhân
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

export default SearchHolder
