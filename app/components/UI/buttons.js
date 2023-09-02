import React from 'react';

const Button = ({ onClick, className, text }) => {
  return <button className={`bg-yellow uppercase ${className}`}>{text}</button>;
};

export default Button;
