import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as store from '../store';

import './ProductDetailsPage.scss';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const products = useSelector(store.getProducts);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (products.length) {
      const currentProduct = products.find(product => (product.title_short === productId))
      setProduct(currentProduct);
    }
  }, [products, productId]);

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="product__details">
        <div className="product__info">
          <img className="product__image" src={product?.logo} alt={product?.title_short} />
          <p className="product__title">{product?.title}</p>
          <a href={product?.link} className="product__outer-link" target=" _blank">Перейти на сайт</a>
        </div>
        <div className="product__activity activity">
          <h2 className="activity__title">Виды тренировок</h2>
          <ul className="activity__list">
            {product?.activity.map(item => (
              <li className="activity__item" key={item.title}>
                <span className="activity__text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
