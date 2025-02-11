import React from 'react';
import './HeaderContainer.scss';
import HorizontalContainer from './HorizontalContainer';

interface HeaderProps {
    title?: string; // Optional title displayed in the header
    className?: string; // Optional additional CSS classes
    children?: React.ReactNode; // Add `children` prop explicitly
}

const HeaderContainer: React.FC<HeaderProps> = ({ title = 'HeaderContainer', className, children }) => {
    const headerClassName = `header ${className || ''}`; // Combine base and custom classes

    return (
        <header className={headerClassName}>
            <div className="header-title">{title}</div>
            <HorizontalContainer className="header-content">{children}</HorizontalContainer>
        </header>
    );
};

export default HeaderContainer;