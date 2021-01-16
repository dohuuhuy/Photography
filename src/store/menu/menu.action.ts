import { api } from './../types'
export const menuActionTypes = {
  GET_MENU: 'GET_MENU',
}

export const fetchMenu = () => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  const res = await fetch(`${api}/navigation`)
  const data = await res.json()
  return res && dispatch({
    type: menuActionTypes.GET_MENU,
    payload: data,
  })
}
