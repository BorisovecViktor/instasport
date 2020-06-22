import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';

import * as store from './store';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(store.loadProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <main className="main">
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/:productType/:productId">
            <ProductDetailsPage />
          </Route>
          <Route path="/clubs">
            <ProductsPage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
