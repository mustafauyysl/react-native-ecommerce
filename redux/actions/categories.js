import * as actionTypes from './actionTypes';

export function getCategoriesSuccess(categories) {
  return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories};
}

export function getCategories() {
  return function (dispatch) {
    let url = 'http://localhost:3000/categories';
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}

export function selectCategoriesSuccess(selectCategory) {
  return {type: actionTypes.SELECT_CATEGORY_SUCCESS, payload: selectCategory};
}

export function selectCategories(categoryName) {
  return function (dispatch) {
    let url = 'http://localhost:3000/products';
    if (categoryName) {
      url = url + '?category=' + categoryName;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(selectCategoriesSuccess(result)));
  };
}
