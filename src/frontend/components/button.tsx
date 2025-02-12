import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void; // Callback for click events
    className?: string;   // Additional CSS classes
    children?: React.ReactNode; // Button text or elements inside the button
}

const Button: React.FC<ButtonProps> = ({ onClick, className = '', children }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;