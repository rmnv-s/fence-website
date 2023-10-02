import React from 'react';

const Button = ({ onClick, className, text }) => {
    return (
        <button className={` uppercase ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
