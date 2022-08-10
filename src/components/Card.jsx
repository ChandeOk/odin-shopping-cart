import React from 'react';
import '../styles/Card.css';
import Quantity from './Quantitiy';
import { useState } from 'react';
const Card = (props) => {
  const [input, setInput] = useState(1);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.match(/\D/)) return;
    setInput(value);
  };

  const handlePlus = () => {
    setInput((prevValue) => +prevValue + 1);
  };
  const handleMinus = () => {
    if (input > 0) setInput((prevValue) => +prevValue - 1);
  };

  const { img, price, name } = props;
  return (
    <div className='card'>
      <h3 className='card-title'>{name}</h3>
      <img className='card-img' src={img} alt={name} />
      <div className='card-bottom-container'>
        <p className='card-price'>${price}</p>
        <Quantity input={[handleChange, handleMinus, handlePlus, input]} />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={() => props.addToCart(name, price, +input)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
