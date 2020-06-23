import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Dispatch } from 'react';
import { createSelector } from 'reselect';

import * as api from '../helpers/api';
import productsReducer, { setProducts } from './products';
import cityFilterReducer from './cityFilter';
import activityFilterReducer from './activityFilter';
import errorReducer, { setError } from './error';
import loadingReducer, { startLoading, finishLoading } from './loading';
import cityReducer, { setCityList } from './cityList';
import activityReducer, { setActivityList } from './activityList';

const rootReducer = combineReducers({
  products: productsReducer,
  filterByCity: cityFilterReducer,
  filterByActivity: activityFilterReducer,
  errorMessage: errorReducer,
  isLoading: loadingReducer,
  cityList: cityReducer,
  activityList: activityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getProducts = (state: RootState) => state.products;
export const getErrorMessage = (state: RootState) => state.errorMessage;
export const getIsLoading = (state: RootState) => state.isLoading;
export const getCityList = (state: RootState) => state.cityList.sort((a, b) => a.localeCompare(b));
export const getActivityList = (state: RootState) => state.activityList.sort((a, b) => a.localeCompare(b));
export const getActualCity = (state: RootState) => state.filterByCity;
export const getActualActivity = (state: RootState) => state.filterByActivity;

export const getFiltredProducts = createSelector(
  getProducts,
  getActualCity,
  getActualActivity,
  (products: Product[], city: string, activity: string) => {
    return products.filter(product => {
      if (city === '' && activity === '') {
        return true;
      }

      if (city === '') {
        return product.activity.some(item => item.title === activity);
      }

      if (activity === '') {
        return product.city.title === city;
      }

      return (product.city.title === city &&
        product.activity.some(item => item.title === activity));
    });
  }
)

export const getFiltredCities = createSelector(
  getProducts,
  getCityList,
  getActualActivity,
  (products: Product[], cities: string[], activity: string) => {
    const filtredCities: FilterList = {};
    if (activity === '') {
      return cities;
    }

    products.forEach(product => {
      const checkActivity = product.activity.some(item => item.title === activity);

      if (checkActivity) {
        filtredCities[product.city.title] = true;
      }
    });

    return Object.keys(filtredCities);
  }
)

export const getFiltredActivities = createSelector(
  getProducts,
  getActivityList,
  getActualCity,
  (products: Product[], activities: string[], city: string) => {
    const filtredActivities: FilterList = {};
    if (city === '') {
      return activities;
    }

    products.forEach(product => {
      if (product.city.title === city) {
        product.activity.forEach(item => filtredActivities[item.title] = true)
      }
    });

    return Object.keys(filtredActivities);
  }
)

export const loadProducts = () => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(setError(''));
    dispatch(startLoading());

    try {
      const city: FilterList = {};
      const activity: FilterList = {};
      const products = await api.fetchProducts();

      products.forEach(product => {
        city[product.city.title] = true;

        product.activity.forEach(item => activity[item.title] = true)
      })

      dispatch(setProducts(products));
      dispatch(setCityList(Object.keys(city)));
      dispatch(setActivityList(Object.keys(activity)));
      dispatch(finishLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(finishLoading());
    }
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
