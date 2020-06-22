import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Dispatch } from 'react';

import * as api from '../helpers/api';
import productsReducer, { setProducts } from './products';
import cityFilterReducer from './cityFilter';
import activityFilterReducer from './activityFilter';
import errorReducer, { setError } from './error';
import loadingReducer, { startLoading, finishLoading } from './loading';

const rootReducer = combineReducers({
  products: productsReducer,
  filterByCity: cityFilterReducer,
  filterByActivity: activityFilterReducer,
  errorMessage: errorReducer,
  isLoading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getProducts = (state: RootState) => state.products;
export const getErrorMessage = (state: RootState) => state.errorMessage;
export const getIsLoading = (state: RootState) => state.isLoading;

export const loadProducts = () => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(setError(''));
    dispatch(startLoading());

    try {
      const products = await api.fetchProducts();

      dispatch(setProducts(products));
      dispatch(finishLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(finishLoading());
    }
  };
};

export const getVisibleProducts = (state: RootState) => {
  const visibleProducts: Product[] = state.products
    .filter((product: Product) => (
      product.city.title === state.filterByCity ||
      state.filterByCity === ''
    ))
    .filter((product: Product) => (
      product.activity.some(item => item.title === state.filterByActivity) ||
      state.filterByActivity === ''
    ))

  return visibleProducts;
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
