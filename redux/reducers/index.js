import {combineReducers} from 'redux';
import productsListReducer from './products/productsListReducer';
import showProductDetailReducer from './products/showProductDetailReducer';
import selectProductReducer from './products/selectProductReducer';
import cartReducer from './cart/cartReducer';
import wishlistReducer from './wishlist/wishlistReducer';
import categoriesListReducer from './categories/categoriesListReducer';
import selectCategoryReducer from './categories/selectCategoryReducer';

const rootReducer = combineReducers({
  productsListReducer,
  showProductDetailReducer,
  selectProductReducer,
  cartReducer,
  wishlistReducer,
  categoriesListReducer,
  selectCategoryReducer,
});

export default rootReducer;
