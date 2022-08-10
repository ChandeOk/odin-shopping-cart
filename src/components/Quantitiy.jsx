import React from 'react';
import { useState } from 'react';
import '../styles/Quantity.css';
const Quantity = (props) => {
  const [handleChange, handleMinus, handlePlus, input] = props.input;

  return (
    <div className='qty-container'>
      <button className='button button-minus' onClick={handleMinus}>
        -
      </button>
      <input
        type='text'
        className='qty'
        value={input}
        onChange={handleChange}
      />
      <button className='button button-plus' onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default Quantity;
