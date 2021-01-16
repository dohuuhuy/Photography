import { includeActionTypes } from './include.action'

const initialState = {
  banners: [],
  list_post: [],
  doctor_top: [],
  news_top: [],
  get_related: []
}

export default function includeReducer(
  state = initialState,
  { type, payload }: any
) {
  switch (type) {
    case includeActionTypes.List_Banners:
      return {
        ...state,
        banners: payload
      }
    case includeActionTypes.List_Post:
      return {
        ...state,
        list_post: payload
      }
    case includeActionTypes.Doctor_Top:
      return {
        ...state,
        doctor_top: payload
      }

    case includeActionTypes.News_Top:
      return {
        ...state,
        news_top: payload
      }

    case includeActionTypes.Get_Related:
      return {
        ...state,
        get_related: payload
      }

    case includeActionTypes.RESET:
      return initialState

    default:
      return state
  }
}
