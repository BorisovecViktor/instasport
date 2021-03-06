import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import * as store from '../store';

import ProductCard from './ProductCard';

import { setFilterByCity } from '../store/cityFilter';
import { setFilterByActivity } from '../store/activityFilter';

const ProductsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filterByCity = searchParams.get('filterByCity') || '';
  const filterByActivity = searchParams.get('filterByActivity') || '';
  const visibleProducts = useSelector(store.getFiltredProducts);
  const cityList = useSelector(store.getFiltredCities);
  const activityList = useSelector(store.getFiltredActivities);
  const [showCityFilter, setShowCityFilter] = useState(false);
  const [showActivityFilter, setShowActivityFilter] = useState(false);

  useEffect(() => {
    dispatch(setFilterByCity(filterByCity));
    dispatch(setFilterByActivity(filterByActivity));
  }, [dispatch, filterByCity, filterByActivity]);

  const filterHandler = (value: string) => {
    if (showCityFilter) {
      setShowCityFilter(false);
      dispatch(setFilterByCity(value));
      searchParams.set('filterByCity', value);
      value === '' && searchParams.delete('filterByCity');
      history.push({
        search: searchParams.toString(),
      });
    }

    if (showActivityFilter) {
      setShowActivityFilter(false);
      dispatch(setFilterByActivity(value));
      searchParams.set('filterByActivity', value);
      value === '' && searchParams.delete('filterByActivity');
      history.push({
        search: searchParams.toString(),
      });
    }
  };

  const handleClickToDetails = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    title_short: string
  ) => {
    e.preventDefault()
    history.push(`/clubs/${title_short}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className="products">
      <div className="products__filters">
        <div className="products__filter">
          <div
            className={classNames('products__dropdown', {
              'products__dropdown--active': showCityFilter
            })}
            onClick={() => {
              setShowCityFilter(!showCityFilter);
              setShowActivityFilter(false)
            }}
          >
            {filterByCity ? filterByCity : 'Город'}
          </div>
          <ul
            className={classNames(
              'products__dropdown-list', {
              'products__dropdown-list--active': showCityFilter
            })}
          >
            <li
              className={classNames(
                'products__dropdown-item', {
                'products__dropdown-item--active': '' === filterByCity
              })}
              onClick={() => filterHandler('')}
            >
            </li>
            {cityList.map(value => (
              <li
                className={classNames(
                  'products__dropdown-item', {
                  'products__dropdown-item--active': value === filterByCity
                })}
                onClick={() => filterHandler(value)}
                key={value}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="products__filter">
          <div
            className={classNames(
              'products__dropdown', {
              'products__dropdown--active': showActivityFilter
            })}
            onClick={() => {
              setShowActivityFilter(!showActivityFilter);
              setShowCityFilter(false);
            }}
          >
            {filterByActivity ? filterByActivity : 'Активность'}
          </div>
          <ul
            className={classNames(
              'products__dropdown-list', {
              'products__dropdown-list--active': showActivityFilter
            })}
          >
            <li
              className={classNames(
                'products__dropdown-item', {
                'products__dropdown-item--active': '' === filterByActivity
              })}
              onClick={() => filterHandler('')}
            >
            </li>
            {activityList.map(value => (
              <li
                className={classNames(
                  'products__dropdown-item', {
                  'products__dropdown-item--active': value === filterByActivity
                })}
                onClick={() => filterHandler(value)}
                key={value}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {visibleProducts.length ?
        <>
          <ul className="products__list">
            {visibleProducts.map(product => (
              <li
                className="product__item"
                key={product.title}
                onClick={(e) => handleClickToDetails(e, product.title_short)}
              >
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </>
        :
        <div>
          <span>К сожалению, в выбранном городе данная тренировка не найдена</span>
        </div>
      }
    </div>
  );
};

export default ProductsList;
