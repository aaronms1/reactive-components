import React, { useState } from 'react';
import './side-navigation.scss';
import Grid from '../pages/grid'; // Import Grid component into SideNavigation

interface SideNavigationProps {
    position: 'left' | 'right'; // Specify if the navigation slides from 'left' or 'right'
    showGrid?: boolean; // Optional flag to determine if a grid should be displayed
    gridProps?: {
        columns?: number;
        gap?: string;
        className?: string;
    }; // Optional props for customizing the Grid
}

/**
 * <h1>{@link SideNavigation}</h1> is a React functional component that renders a collapsible side navigation menu.
 * It can be configured to support sliding in from both the left and right side of the view and includes an optional grid.
 */
const SideNavigation: React.FC<SideNavigationProps> = ({ position, showGrid = false, gridProps }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Navigation ({position})</button>
            {/* Dynamic classes for side-nav and position */}
            <div className={`side-nav side-nav-${position} ${isOpen ? 'active' : ''}`}>
                <p>{position === 'left' ? 'Left Navigation Content' : 'Right Navigation Content'}</p>
                {/* Conditionally render the Grid component */}
                {showGrid && (
                    <div className="side-nav-grid">
                        <Grid {...gridProps} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideNavigation;