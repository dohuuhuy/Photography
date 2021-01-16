import cx from 'classnames'
import { MDBCol, MDBRow } from 'mdbreact'
import Link from 'next/link'
import styles from './style.module.scss'
const CongTacXaHoi = () => {
  return (
    <MDBRow>
      <MDBCol>
        <div className={`${styles.box_right_article}`}>
          <div className={cx(`${styles.title_box_category}`, 'clearfix')}>
            <h4 className={styles.title}>
              <a href="/">Danh mục</a>
            </h4>
          </div>
          <div className={styles.article_item}>
            <div className={styles.article_item__list}>
              <div className={styles.img}>
                <Link href="/benh-vien">
                  <a className={styles.img_link}>Bệnh viện</a>
                </Link>
              </div>
            </div>
            <div className={styles.article_item__list}>
              <div className={styles.img}>
                <Link href="/phong-kham">
                  <a className={styles.img_link}>Phòng khám</a>
                </Link>
              </div>
            </div>
            <div className={styles.article_item__list}>
              <div className={styles.img}>
                <Link href="/bac-si">
                  <a className={styles.img_link}>Bác sĩ</a>
                </Link>
              </div>
            </div>
            <div className={styles.article_item__list}>
              <div className={styles.img}>
                <Link href="/kien-thuc-y-khoa">
                  <a className={styles.img_link}>Kiến thức y khoa</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  )
}
export default CongTacXaHoi
