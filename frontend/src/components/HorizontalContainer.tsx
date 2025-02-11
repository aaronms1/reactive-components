import React, { Component, ReactNode } from 'react';
import './HorizontalContainer.scss'; // Optional styling if needed

interface HorizontalContainerProps {
    className?: string; // Additional CSS classes
    children?: ReactNode; // Components or elements to be rendered inside
}

class HorizontalContainer extends Component<HorizontalContainerProps> {
    render() {
        const { className, children } = this.props;

        return (
            <div className={`horizontal-container ${className || ''}`}>
                {children}
            </div>
        );
    }
}

export default HorizontalContainer;