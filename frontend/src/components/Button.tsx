import React, { Component } from 'react';
import './Button.scss'; // Import your button styles

interface ButtonProps {
    onClick?: () => void; // Callback for click events
    className?: string;   // Additional CSS classes
    children?: React.ReactNode; // Button text or elements inside the button
}

class Button extends Component<ButtonProps> {
    render() {
        const { onClick, className, children } = this.props;

        return (
            <button className={`button ${className || ''}`} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;