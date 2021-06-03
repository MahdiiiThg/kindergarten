import * as types from '../types'
const initialState = {
  showSlider: false,
}

export const slider = (state=initialState, action) => {
  switch(action.type) {
    case types.SHOW_SLIDER:
      return  {
        ...state,
        showSlider: true,
      }
    case types.HIDE_SLIDER:
      return  {
        ...state,
        showSlider: false,
      }
    default:
      return state
  }
}
