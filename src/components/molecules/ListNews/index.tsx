import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { DOMAIN_env } from 'src/utils/contants'
import { Link_News } from './Link_custom'
import styles from './style.module.scss'
interface Props {
  list_post?: any
}
const List_News = ({ list_post }: Props) => {
  const router = useRouter()
  const { cate } = router.query
  return (
    <div className={styles['list-news-vertical']}>
      {list_post &&
        list_post?.map(
          ({
            id,
            title,
            slug: href_post,
            description,
            updated_at,
            image,
            categories,
            subcategories,
          }: any) => {
            const href_cate = categories[0]?.slug
            const lablel_cate = categories[0]?.title
            const href_subcate = subcategories[0]?.slug
            const lablel_subcate = subcategories[0]?.title
            const url_img = image[0]
              ? `${DOMAIN_env}${image[0].url}`
              : cate === 'tuyen-dung'
              ? '/img/imgweb/medpro-tuyen-dung.jpg'
              : '/img/imgweb/tin-tuc-medpro.jpg'
            return (
              <div className={styles['art-item']} key={id}>
                <div className={styles['small-big']}>
                  <Link_News
                    cate={href_cate}
                    subcate={href_subcate}
                    post={href_post}
                  >
                    <Image src={url_img} width="670" height="402" />
                  </Link_News>
                </div>
                <div className={styles.content}>
                  <h3 className={styles['content-title']}>
                    <Link_News
                      cate={href_cate}
                      subcate={href_subcate}
                      post={href_post}
                    >
                      {title}
                    </Link_News>
                  </h3>
                  <div className={styles.tag}>
                    {lablel_cate || lablel_subcate} -
                    <span>
                      {moment(updated_at).format('DD/MM/YYYY, hh:mm')}
                    </span>
                  </div>
                  <p className={styles.description}>
                    <Link_News
                      cate={href_cate}
                      subcate={href_subcate}
                      post={href_post}
                    >
                      {description}
                    </Link_News>
                  </p>
                </div>
              </div>
            )
          }
        )}
    </div>
  )
}

export default List_News
