import { DOMAIN_env } from 'src/utils/contants';
import { api_get } from "./api"


export const FetchPostDetails = async (query: any) => {
    try {
        const url = `${DOMAIN_env}/posts?slug=${query}`
        const rs = await api_get(url)
        return rs[0] || null
    } catch (error) {
        return null
    }
}


export const FetchPostRelated = async ({ cate, subcate, post }: any) => {

    if (post) {
        const url = `${DOMAIN_env}/posts?_sort=updated_at:DESC&_limit=3&subcategories.slug=${subcate}&slug_nin=${post}`
        const rs = await api_get(url)
        return rs || null
    } else {
        const url = `${DOMAIN_env}/posts?_sort=updated_at:DESC&_limit=3&categories.slug=${cate}&slug_nin=${subcate}`
        const rs = await api_get(url)
        return rs || null
    }
}

export const FetchSingleDetails = async (query: any) => {
    try {
        const url = `${DOMAIN_env}/list-generals?href_general=${query}`
        const rs = await api_get(url)
        return rs[0] || null
    } catch (error) {
        return null
    }
}