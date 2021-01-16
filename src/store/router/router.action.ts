export const routerActionTypes = {
  SAVE_DATA: 'SAVE_DATA'
}

export const saveData = (data: any) => async (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  return dispatch({
    type: routerActionTypes.SAVE_DATA,
    payload: data
  })
}
