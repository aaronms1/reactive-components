import React, { Component } from 'react';
import './HeaderContainer.scss'; // Import for styling
import HorizontalContainer from './HorizontalContainer'; // Import HorizontalContainer

interface HeaderProps {
    title?: string; // Optional title displayed in the header
    className?: string; // Optional additional CSS classes
    children?: React.ReactNode; // Add `children` prop explicitly
}

class HeaderContainer extends Component<HeaderProps> {
    render() {
        const { title = 'HeaderContainer', className, children } = this.props;

        // Combine the base class with any custom classes passed via props
        const headerClassName = `header ${className || ''}`;

        return (
            <header className={headerClassName}>
                <div className="header-title">{title}</div>
                <HorizontalContainer className="header-content">
                    {children}
                </HorizontalContainer>
            </header>
        );
    }
}

export default HeaderContainer;