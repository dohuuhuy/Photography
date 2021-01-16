export const countActionTypes = {
  ADD: 'ADD',
  RESET: 'RESET',
}

export const addCount = () => async (
  dispatch: (arg0: { type: string }) => any
) => {
  return dispatch({ type: countActionTypes.ADD })
}
export const resetCount = () => async (
  dispatch: (arg0: { type: string }) => any
) => {
  return dispatch({ type: countActionTypes.RESET })
}
