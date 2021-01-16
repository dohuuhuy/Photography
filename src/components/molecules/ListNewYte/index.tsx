import Link from 'next/link'
import styles from './style.module.scss'
import cx from 'classnames'
import { Icon } from '@components/icon/Icon'
const ListNewYte = () => {
  return (
    <div className={`${styles.box_right_article} ${styles.soyte}`}>
      <div className={cx(`${styles.title_box_category}`, 'clearfix')}>
        <h4 className={styles.title}>
          <a href="/">Thông tin từ sở y tế</a>
        </h4>
      </div>
      <div className={styles.article_item}>
        <div className={styles.article_item__list}>
          <div className={styles.description}>
            <div className={styles.time_news}>
              <Icon name={'clock'} />
              23/03/2019,17:28
            </div>
            <h3>
              <Link href="/">
                <a>
                  Tập huấn về tổ chức, xây dựng và vận hành trang thông tin điện
                  tử - Sở Y tế TP. Hồ Chí Minh
                </a>
              </Link>
            </h3>
          </div>
        </div>
        <div className={styles.article_item__list}>
          <div className={styles.description}>
            <div className={styles.time_news}>
              <Icon name={'clock'} />
              23/03/2019,17:28
            </div>
            <h3>
              <Link href="/">
                <a>
                  Tập huấn về tổ chức, xây dựng và vận hành trang thông tin điện
                  tử - Sở Y tế TP. Hồ Chí Minh
                </a>
              </Link>
            </h3>
          </div>
        </div>
        <div className={styles.article_item__list}>
          <div className={styles.description}>
            <div className={styles.time_news}>
              <Icon name={'clock'} />
              23/03/2019,17:28
            </div>
            <h3>
              <Link href="/">
                <a>
                  Tập huấn về tổ chức, xây dựng và vận hành trang thông tin điện
                  tử - Sở Y tế TP. Hồ Chí Minh
                </a>
              </Link>
            </h3>
          </div>
        </div>
        <div className={styles.article_item__list}>
          <div className={styles.description}>
            <div className={styles.time_news}>
              <Icon name={'clock'} />
              23/03/2019,17:28
            </div>
            <h3>
              <Link href="/">
                <a>
                  Tập huấn về tổ chức, xây dựng và vận hành trang thông tin điện
                  tử - Sở Y tế TP. Hồ Chí Minh
                </a>
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.view_all}>
        <Link href="/">
          <a>Xem tất cả</a>
        </Link>
      </div>
    </div>
  )
}
export default ListNewYte
