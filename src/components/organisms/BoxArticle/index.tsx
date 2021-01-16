import cx from 'classnames'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@components/icon/Icon'

interface Props {
  className?: string
}
const BoxArticle = ({ className }: Props) => {
  return (
    <div className={cx(styles.box_article, className)}>
      <div className="clearfix">
        <div className={styles.title_box_category}>
          <h4 className={styles.title}>
            <a title="Tin tức sự kiện" href="/tin-tuc-su-kien">
              Tin tức sự kiện
            </a>
          </h4>
          <Link href="/list-cate">
            <a href="/">Xem tất cả</a>
          </Link>
        </div>
      </div>
      <div className={styles.article_info}>
        <div className={styles.article_list_new}>
          <div className={styles.img}>
            <Link href="/news">
              <a className={styles.img_link}>
                <Image src="/img/imgweb/670x402.jpg" width="670" height="402" />
              </a>
            </Link>
          </div>
          <div className={styles.time_news}>
            <ul>
              <li>
                <Icon name={'clock'} />
                23/03/2019,18:07
              </li>
            </ul>
          </div>
          <h3 className={styles.title_news}>
            <a
              title="Bộ trưởng Bộ Y tế đề nghị Bệnh viện Đại học Y Dược thành lập khoa vệ tinh ở các tỉnh"
              href="/"
            >
              Bệnh da thường gặp sau mùa lũ và khuyến cáo cần biết
            </a>
          </h3>
          <div className="description_news">
            Sau mùa mưa bão, lũ lụt, như thường lệ sẽ phát sinh nhiều yếu tố
            nguy cơ gây nhiều bệnh, đặc biệt người dân sống trong vùng ngập lụt
            rất dễ mắc các bệnh ngoài da.
          </div>
        </div>
        <div className={styles.article_item}>
          <div className={styles.article_item__list}>
            <div className={styles.img}>
              <Link href="/news">
                <a className={styles.img_link}>
                  <Image
                    src="/img/imgweb/670x402.jpg"
                    width="670"
                    height="402"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.description}>
              <div className={styles.time_news}>
                <Icon name={'clock'} /> 23/03/2019,11:33
              </div>
              <h3>
                <a
                  title="Hội nghị tim mạch 2016: Nhiều tiến bộ trong điều trị bệnh tim mạch"
                  href="/"
                >
                  Hội nghị tim mạch 2016: Nhiều tiến bộ trong điề...
                </a>
              </h3>
            </div>
          </div>
          <div className={styles.article_item__list}>
            <div className={styles.img}>
              <Link href="/news">
                <a className={styles.img_link}>
                  <Image
                    src="/img/imgweb/670x402.jpg"
                    width="670"
                    height="402"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.description}>
              <div className={styles.time_news}>
                <Icon name={'clock'} /> 23/03/2019,11:33
              </div>
              <h3>
                <a
                  title="Hội nghị tim mạch 2016: Nhiều tiến bộ trong điều trị bệnh tim mạch"
                  href="/"
                >
                  Hội nghị tim mạch 2016: Nhiều tiến bộ trong điề...
                </a>
              </h3>
            </div>
          </div>
          <div className={styles.article_item__list}>
            <div className={styles.img}>
              <Link href="/news">
                <a className={styles.img_link}>
                  <Image
                    src="/img/imgweb/670x402.jpg"
                    width="670"
                    height="402"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.description}>
              <div className={styles.time_news}>
                <Icon name={'clock'} />
                23/03/2019,11:33
              </div>
              <h3>
                <a
                  title="Hội nghị tim mạch 2016: Nhiều tiến bộ trong điều trị bệnh tim mạch"
                  href="/"
                >
                  Hội nghị tim mạch 2016: Nhiều tiến bộ trong điề...
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxArticle
