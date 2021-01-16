// import { DOMAIN_env } from "src/utils/contants"

export const includeActionTypes = {
  List_Banners: "List_Banners",
  List_Post: 'List_Post',
  Doctor_Top: 'Doctor_Top',
  News_Top: 'News_Top',
  Get_Related: 'Get_Related',
  RESET: 'RESET'

}
export const Reset = () => async (
  dispatch: (arg0: { type: string }) => any
) => {
  return dispatch({ type: includeActionTypes.RESET })
}


export const Get_Related = (data: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: includeActionTypes.Get_Related,
    payload: data
  })
}

export const save_News_Top = (data: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: includeActionTypes.News_Top,
    payload: data
  })
}

export const save_Doctor_Top = (data: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: includeActionTypes.Doctor_Top,
    payload: data
  })
}

export const save_Banners = (data: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: includeActionTypes.List_Banners,
    payload: data
  })
}

export const save_List_Post = (data: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: includeActionTypes.List_Post,
    payload: data
  })
}

// export const save_Banners = () => async (
//   dispatch: (arg0: { type: string; payload: string[] }) => any
// ) => {
//   const res = await fetch(`${DOMAIN_env}/banners`)
//   const data = await res.json()
//   return dispatch({
//     type: includeActionTypes.List_Banners,
//     payload: data
//   })
// }

