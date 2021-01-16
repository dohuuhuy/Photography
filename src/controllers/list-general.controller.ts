import { api_get } from "./api"

const DOMAIN_env = process.env.api

export const FetchListGeneral = async (query: any) => {
    try {
        const { general } = query
        const _general = general.replace('-', '_')
        const url = `${DOMAIN_env}/list-generals?pin_in=false&type_list=${_general}`
        const rs = await api_get(url)
        return rs
    } catch (error) {
        return null
    }

}
export const FetchTopGeneral = async (query: any) => {
    try {
        const { general } = query
        const _general = general.replace('-', '_')
        const url = `${DOMAIN_env} /list-generals?pin_in=true&type_list=${_general}`
        const rs = await api_get(url)
        return rs[0]
    } catch (error) {
        return null
    }
}