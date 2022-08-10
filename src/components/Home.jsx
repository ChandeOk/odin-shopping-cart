import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Link className='shop-main-link' to='shop'>
        SHOP NOW
      </Link>
    </div>
  );
};

export default Home;
