import React from 'react';
import { useSelector } from 'react-redux';

import * as store from '../store';

import './ProductsPage.scss';
import ProductsList from '../components/ProductsList';
import GoBackButton from '../components/GoBackButton';
import Spinner from '../components/Spinner';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductsPage = () => {
  const loading = useSelector(store.getIsLoading);
  const errorMessage = useSelector(store.getErrorMessage);

  return (
    <div className="container">
      {errorMessage ?
        <p>{errorMessage}</p>
        :
        <>
          {loading
            ?
            <Spinner />
            :
            <>
              <Breadcrumbs />
              <GoBackButton />
              <h1 className="page__title">Запись на тренировки онлайн</h1>
              <ProductsList />
            </>
          }
        </>
      }
    </div>
  );
};

export default ProductsPage;
