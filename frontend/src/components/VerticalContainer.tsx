import React, { Component, ReactNode } from 'react';
import './VerticalContainer.scss'; // Optional styling if needed

interface VerticalContainerProps {
    className?: string; // Additional CSS classes
    children?: ReactNode; // Components or elements to be rendered inside
}

class VerticalContainer extends Component<VerticalContainerProps> {
    render() {
        const { className, children } = this.props;

        return (
            <div className={`vertical-container ${className || ''}`}>
                {children}
            </div>
        );
    }
}

export default VerticalContainer;