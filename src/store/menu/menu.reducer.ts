import { menuActionTypes } from './menu.action'

const initialState = {
  menu: {},
  loading: false,
}

export default function menuReducer(
  state = initialState,
  { type, payload }: any
) {
  switch (type) {
    case menuActionTypes.GET_MENU:
      return {
        menu: payload,
      }

    default:
      return state
  }
}
