import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Link className="home-page__link"
        to={{
          pathname: "/clubs",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      Подобрать клуб
    </Link>
    </div>
  );
}

export default HomePage;
