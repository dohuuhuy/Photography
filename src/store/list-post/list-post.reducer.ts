import { listpost_ActionTypes } from './list-post.action'

const initialState = {
  list_post: [],
}

export default function routerReducer(
  state = initialState,
  { type, payload }: any
) {
  switch (type) {
    case listpost_ActionTypes.LIST_POST:
      return {
        ...state,
        list_post: payload
      }

    default:
      return state
  }
}
