import { DOMAIN_env, LIMIT_PAGE } from 'src/utils/contants'
import { api_get, get_path } from './api'

export const TypeLinkCate = async (ctx: any) => {

  const x = get_path(ctx?.params.cate)
  const { path, page }: any = x

  const Item_Cate = await GetType(path)
  if (Item_Cate) {
    const { typeLink, post } = Item_Cate
    switch (typeLink) {
      case 'list_post_cate':
        const list = await FetchListPost(path, page)
        const total = await GetTotalListPost(path)
        return { data: { list, total, page: +page }, typeLink }

      case 'list_general':
        const top_General = await FetchTopGeneral(path)
        const list_General = await FetchListGeneral(path, page)
        const total_General = await GetTotaListGeneral(path)
        return {
          data: { top_General, list_General, total_General, page_General: +page },
          typeLink,
        }
      case 'post':
        return {
          data: { post },
          typeLink,
        }

      default:
        return null
    }
  }
  return null
}

const GetTotalListPost = async (cate: string) => {
  try {
    const url = `${DOMAIN_env}/posts?pin_in=false&_sort=updated_at:desc&categories.slug_in=${cate}`
    const rs = await api_get(url)
    return rs.length ? rs.length : null
  } catch (error) {
    return null
  }
}

const GetTotaListGeneral = async (cate: string) => {
  try {
    const _cate = cate.replace('-', '_')
    const url = `${DOMAIN_env}/list-generals?pin_in=false&type_list=${_cate}`
    const rs = await api_get(url)
    return rs.length ? rs.length : null
  } catch (error) {
    return null
  }
}

const FetchListPost = async (cate: string, page: number) => {
  try {
    const start = +page === 1 ? 0 : (+page - 1) * LIMIT_PAGE
    const url = `${DOMAIN_env}/posts?pin_in=false&_sort=updated_at:desc&_start=${start}&_limit=${LIMIT_PAGE}&categories.slug_in=${cate}`
    const rs = await api_get(url)

    if (rs.length) {
      return rs
    }
    else {
      return null
    }
  } catch (error) {
    return null
  }
}
const FetchListGeneral = async (cate: any, page: number) => {
  try {
    const start = +page === 1 ? 0 : (+page - 1) * LIMIT_PAGE
    const _cate = cate.replace('-', '_')
    const url = `${DOMAIN_env}/list-generals?pin_in=false&type_list=${_cate}&_start=${start}&_limit=${LIMIT_PAGE}`
    const rs = await api_get(url)
    return rs.length ? rs : null
  } catch (error) {
    return null
  }
}
const FetchTopGeneral = async (cate: any) => {
  try {
    const _cate = cate.replace('-', '_')
    const url = `${DOMAIN_env}/list-generals?pin_in=true&type_list=${_cate}&_sort=updated_at:desc&_limit=1`
    const rs = await api_get(url)
    return rs.length ? rs[0] : null
  } catch (error) {
    return null
  }
}

export const GetType = async (element: any) => {
  try {
    const url = `${DOMAIN_env}/navigation`
    const x = await api_get(url)

    return x && x.navigation?.find((item: any) => {
      return item.slug === element
    })
  } catch (error) {
    return null
  }
}