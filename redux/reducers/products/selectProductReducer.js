import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function selectProductReducer(
  state = initialState.selectProduct,
  action,
) {
  switch (action.type) {
    case actionTypes.SELECT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
