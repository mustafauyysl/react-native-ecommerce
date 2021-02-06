import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function selectCategoryListReducer(
  state = initialState.selectCategory,
  action,
) {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
