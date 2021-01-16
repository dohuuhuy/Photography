export const postActionTypes = {
  GET_POST: 'GET_POST',
}

export const fetchPosts = () => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: postActionTypes.GET_POST,
    payload: ['baif 1', 'bai thu 2', 'nguoi thu 3'],
  })
}
