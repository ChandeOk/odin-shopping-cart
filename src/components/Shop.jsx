import React from 'react';
import data from '../Data';
import Card from './Card';
import '../styles/Shop.css';
import { useState } from 'react';

const Shop = (props) => {
  // const { img, price, name } = props.data.products[0];
  const [cart, setCart] = useState([]);

  const addToCart = (product, price, qty = 1) => {
    const hasSameProduct = cart.some(
      (cartItem) => cartItem.product === product
    );
    console.log(hasSameProduct);
    if (hasSameProduct) {
      setCart((prevCart) => {
        const targetProduct = prevCart.find(
          (cartItem) => cartItem.product === product
        );
        const copy = prevCart.filter(
          (cartItem) => cartItem.product !== product
        );
        return [...copy, { ...targetProduct, qty: targetProduct.qty + qty }];
      });
    } else setCart((prevCart) => [...prevCart, { product, price, qty }]);
  };

  const removeFromCart = (product) => {
    const hasSameProduct = cart.some(
      (cartItem) => cartItem.product === product
    );
    console.log(hasSameProduct);
    if (hasSameProduct) {
      setCart((prevCart) => {
        const targetProduct = prevCart.find(
          (cartItem) => cartItem.product === product
        );
        const copy = prevCart.filter(
          (cartItem) => cartItem.product !== product
        );
        return [...copy, { ...targetProduct, qty: targetProduct.qty - qty }];
      });
    }
  };

  console.log(cart);

  const products = props.data.products.map((product) => (
    <Card
      img={product.img}
      price={product.price}
      name={product.name}
      key={product.name}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  ));
  return (
    <div className='shop'>
      <div className='products-container'>{products}</div>
    </div>
  );
};

export default Shop;
