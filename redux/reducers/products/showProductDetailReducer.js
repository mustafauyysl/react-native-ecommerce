import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function showProductDetailReducer(
  state = initialState.showProductDetail,
  action,
) {
  switch (action.type) {
    case actionTypes.SHOW_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
