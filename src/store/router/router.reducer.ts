import { routerActionTypes } from './router.action'

const initialState = {
  router: {},
}

export default function routerReducer(
  state = initialState,
  { type, payload }: any
) {
  switch (type) {
    case routerActionTypes.SAVE_DATA:
      return {
        ...state,
        router: payload
      }

    default:
      return state
  }
}
