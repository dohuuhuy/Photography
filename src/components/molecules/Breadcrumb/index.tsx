import { Link_cate, Link_page, Link_subcate } from '@components/atoms/Link'
import { Icon } from '@components/icon/Icon'
import { api } from '@store/types'
import cx from 'classnames'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { get_path } from 'src/controllers/api'
import { hidden_page } from 'src/utils/contants'
interface Props {
  content?: number
  className?: string
}
interface prov {
  label?: string
  slug?: string
}
const Breadcrumb = ({ className }: Props) => {
  const router = useRouter()
  const { cate, subcate } = router.query

  const { menu } = useSelector((state: { menu: any }) => state.menu)
  const { navigation }: any = menu

  const [bread_Cate, setbread_Cate] = useState<prov | null>()
  const [bread_SubCate, setbread_SubCate] = useState<prov | null>()

  const get_breadcrumb = async (navigation: any) => {
    const a = get_path(cate)
    const b = get_path(subcate)

    const x =
      Object.keys(router?.query).length >= 1
        ? a?.path
        : router?.asPath.replace('/', '')

    const get_cate = navigation?.find((item: any) => {
      return item?.slug === x
    })
    if (get_cate) {
      const { label, slug } = get_cate
      setbread_Cate({
        label,
        slug,
      })
      const get_subcate = get_cate.navSubItem.find((item: any) => {
        return item.slug === b?.path
      })
      {
        if (get_subcate) {
          const { label, slug } = get_subcate
          setbread_SubCate({
            label,
            slug,
          })
        }
      }
    }
  }
  const get_menu = async () => {
    const res = await fetch(`${api}/navigation`)
    const data = await res.json()
    const { navigation }: any = data
    get_breadcrumb(navigation)
  }
  useEffect(() => {
    if (router?.query) {
      setbread_Cate(null)
      setbread_SubCate(null)
      if (navigation) {
        get_breadcrumb(navigation)
      }
      get_menu()
    }
  }, [router?.query])

  return hidden_page.includes(router?.asPath) ? null : (
    <ol className={cx('breadcrumb', className)} itemScope={true}>
      <li className="breadcrumb-item">
        <Link_page>
          <Icon name={'home'} className="mr-1 mb-1" />
          Trang chủ
        </Link_page>
      </li>

      <li className={'breadcrumb-item' + (bread_Cate?.label ? '' : ' d-none')}>
        <Link_cate cate={bread_Cate?.slug}>{bread_Cate?.label}</Link_cate>
      </li>

      <li
        className={'breadcrumb-item ' + (bread_SubCate?.label ? '' : ' d-none')}
      >
        <Link_subcate cate={bread_Cate?.slug} subcate={bread_SubCate?.slug}>
          {bread_SubCate?.label}
        </Link_subcate>
      </li>
    </ol>
  )
}

export default Breadcrumb
