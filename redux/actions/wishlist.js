import * as actionTypes from './actionTypes';

export function addToWishlist(product) {
  return {type: actionTypes.ADD_TO_WISHLIST, payload: product};
}

export function removeFromWishlist(product) {
  return {type: actionTypes.REMOVE_FROM_WISHLIST, payload: product};
}
