import React from 'react';
import LazyImage from './LazyImage';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  let { title, logo, title_short } = product;
  
  if(!/jpg|png/i.test(logo)) {
    logo = 'https://placekitten.com/200/300';
  }

  return (
    <a href="#!" className="product__link animate__animated animate__flipInY">
      <LazyImage src={logo} alt={title_short} />
      <p className="product__title">{title}</p>
    </a>
  );
}

export default ProductCard;
