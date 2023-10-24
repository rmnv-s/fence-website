import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string;
    text: string;
    type?: "button" | "submit" | "reset"
}
const Button = ({ onClick, className, text, type }: ButtonProps) => {
    return (
        <button className={` uppercase ${className}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
