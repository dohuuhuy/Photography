import { Link_cate, Link_post } from '@components/atoms/Link'
import cx from 'classnames'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { DOMAIN_env } from 'src/utils/contants'
import styles from './style.module.scss'

const ArticleSpecial = () => {
  const i = useSelector((state: any) => state.include)

  const { news_top } = i

  const {
    slug,
    image,
    title,
    author,
    workUnit,
    categories,
    description,
    subcategories,
  } = news_top[0]

  const name_cate = subcategories[0]?.title
  const href_subcate = subcategories[0]?.slug
  const active_news = news_top.length ? '' : ' d-none'
  const href_cate = categories[0] ? categories[0]?.slug : subcategories[0]?.slug
  const url_img = image[0]
    ? `${DOMAIN_env + image[0]?.url}`
    : '/img/imgweb/img-01.png'
  return (
    <div className={styles['dc-sectionbg']}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className={styles['dc-bringcarecontent'] + active_news}>
              <div
                className={cx(
                  styles['dc-sectionhead'],
                  styles['dc-sectionheadvtwo']
                )}
              >
                <div className={styles['dc-sectiontitle']}>
                  <Link_post
                    cate={href_cate}
                    subcate={href_subcate}
                    post={slug}
                  >
                    <h3>{title}</h3>
                  </Link_post>
                  <Link_cate cate={href_cate}>
                    <div className={styles.tag}>{name_cate}</div>
                  </Link_cate>
                </div>
                <div className={styles['dc-description']}>
                  <Link_post
                    cate={href_cate}
                    subcate={href_subcate}
                    post={slug}
                  >
                    <p>{description}</p>
                  </Link_post>
                </div>
              </div>
              <div className={styles['dc-btnarea']}>
                <Link_cate cate={href_cate} className={styles['dc-btn']}>
                  Xem thêm
                </Link_cate>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className={styles['dc-bringimg-holder'] + active_news}>
              <figure className={styles['dc-doccareimg']}>
                <Link_post cate={href_cate} subcate={href_subcate} post={slug}>
                  <Image
                    src={url_img}
                    width="670"
                    height="402"
                    layout="intrinsic"
                  />
                </Link_post>

                <figcaption className={author || workUnit ? '' : 'd-none'}>
                  <div className={styles['dc-doccarecontent']}>
                    <h3>
                      <Link_post
                        cate={href_cate}
                        subcate={href_subcate}
                        post={slug}
                        className={'text-white'}
                      >
                        <em>{author}</em>
                      </Link_post>
                      <Link_post
                        cate={href_cate}
                        subcate={href_subcate}
                        post={slug}
                        className={'text-white'}
                      >
                        {workUnit}
                      </Link_post>
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleSpecial
