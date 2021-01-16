import { DOMAIN_env, LIMIT_PAGE } from "src/utils/contants"
import { api_get } from "./api"
import { FetchPostDetails, FetchSingleDetails } from "./post.controller"



export const TypeLinkSubCate = async (ctx: any) => {

    const { cate, subcate, page = 1 }: any = ctx.params

    const single = await FetchSingleDetails(subcate)
    if (single) {
        return { data: { single }, typeLink: 'single' }
    }

    const post_from_list = await FetchPostDetails(subcate)
    if (post_from_list) {
        return { data: { post_from_list, type: 'post_from_list' }, typeLink: 'post' }
    }

    const Item_Cate = await GetType(cate, subcate)
    if (Item_Cate) {
        const { typeLink, post: post_from_menu }: any = Item_Cate
        if (typeLink) {
            switch (typeLink) {
                case 'list_post_sub_cate':
                    const list = await FetchListPost(subcate, page)
                    const total = await GetTotalListPost(subcate)
                    return { data: { list, total, page: +page }, typeLink }
                case 'post':
                    return { data: { post_from_menu, type: 'post_from_menu' }, typeLink }
                default:
                    return null
            }
        }
    }
    else {
        return null
    }

}


export const GetType = async (cat: any, subcate: any) => {
    try {
        const url = `${DOMAIN_env}/navigation`
        const { navigation } = await api_get(url)
        const parent = navigation.find((item: any) => {
            return item.slug === cat
        })
        const childrent = parent.navSubItem.find((item: any) => {
            return item.slug === subcate
        })
        return childrent
    } catch (error) {
        return null
    }
}

const GetTotalListPost = async (subcate: string) => {
    try {
        const url = `${DOMAIN_env}/posts?subcategories.slug=${subcate}`
        const rs = await api_get(url)
        return rs.length
    } catch (error) {
        return null
    }

}
const FetchListPost = async (subcate: string, page: number) => {
    try {
        const start = +page === 1 ? 0 : (+page - 1) * LIMIT_PAGE
        const url = `${DOMAIN_env}/posts?subcategories.slug=${subcate}&_start=${start}&_limit=${LIMIT_PAGE}`
        const rs = await api_get(url)
        return rs
    } catch (error) {
        return null
    }

}