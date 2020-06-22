import React from 'react';
import LazyImage from './LazyImage';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { title, logo, title_short } = product;

  return (
    <a href="#!" className="product__link">
      <LazyImage src={logo} alt={title_short} />
      <p className="product__title">{title}</p>
    </a>
  );
}

export default ProductCard;
