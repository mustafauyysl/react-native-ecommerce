
import {combineReducers} from 'redux';
import productsListReducer from './products/productsListReducer';
import showProductDetailReducer from './products/showProductDetailReducer';
import selectProductReducer from './products/selectProductReducer';
import cartReducer from './cart/cartReducer';
import wishlistReducer from './wishlist/wishlistReducer';

const rootReducer = combineReducers({
    productsListReducer,
    showProductDetailReducer,
    selectProductReducer,
    cartReducer,
    wishlistReducer
})

export default rootReducer;