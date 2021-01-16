import { api_get } from "src/controllers/api"
import { DOMAIN_env, LIMIT_PAGE } from "src/utils/contants"

export const listpost_ActionTypes = {
  LIST_POST: 'LIST_POST'
}


export const fetchListPost = ({ cate, start }: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  const url_list_post = `${DOMAIN_env}/posts?categories.slug=${cate}&_start=${start}&_limit=${LIMIT_PAGE}`
  const data: any = await api_get(url_list_post)

  return dispatch({
    type: listpost_ActionTypes.LIST_POST,
    payload: data
  })


}




