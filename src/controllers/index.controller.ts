import { DOMAIN_env } from 'src/utils/contants'
import { api_get } from './api'


export const IndexController = async (_ctx: any) => {
  const list_post = await GetListPost()
  const banners = await Get_Banner()
  const doctor_Top = await GetTopDoctor()
  const news_Top = await GetTopNews()

  if (list_post === null || banners === null || doctor_Top === null || news_Top === null) {
    return null
  }

  return { data: { banners, list_post, doctor_Top, news_Top } }
};


const GetTopNews = async () => {
  try {
    const url = `${DOMAIN_env}/posts?pin=true&_sort=updated_at:desc&_limit=1`
    const rs = await api_get(url)
    return rs
  } catch (error) {
    return null
  }
}

const GetTopDoctor = async () => {
  try {
    const url = `${DOMAIN_env}/list-generals?type_list=bac_si&pin=true`
    const rs = await api_get(url)
    return rs
  } catch (error) {
    return null
  }
}

const GetListPost = async () => {
  const LIMIT_POST = 8
  try {
    const url = `${DOMAIN_env}/posts?pin_in=true&_limit=${LIMIT_POST}&_sort=updated_at:DESC&categories.slug_nin=tuyen-dung`
    const rs = await api_get(url)
    if (rs.length < LIMIT_POST) {
      const url2 = `${DOMAIN_env}/posts?pin_in=false&_sort=updated_at:DESC&_limit=${LIMIT_POST - rs.length}&categories.slug_nin=tuyen-dung`
      const rs2 = await api_get(url2)
      return [...rs, ...rs2]
    }
    if (rs.length === LIMIT_POST) {
      return rs
    }
    else {
      return null
    }

  } catch (error) {
    return null
  }
}

export const Get_Banner = async () => {
  try {
    const url = `${DOMAIN_env}/banners`
    const rs = await api_get(url)
    return rs.length ? rs : null
  } catch (error) {
    return null
  }
}