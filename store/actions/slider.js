import * as types from '../types'

export const activeSlider = () => async dispatch => {
  dispatch({
    type: types.SHOW_SLIDER,
    payload: true
  })
}

export const deActiveSlider = () => async dispatch => {
  dispatch({
    type: types.HIDE_SLIDER,
    payload: false
  })
}