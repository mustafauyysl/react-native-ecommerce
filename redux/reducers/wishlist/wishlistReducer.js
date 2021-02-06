import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function wishlistReducer(state = initialState.wishlist, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      return [...state, {...action.payload}];
    case actionTypes.REMOVE_FROM_WISHLIST:
      const newState2 = state.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
      return newState2;
    default:
      return state;
  }
}
