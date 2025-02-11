import React from 'react';
import './FooterContainer.scss';
import HorizontalContainer from './HorizontalContainer';

interface FooterProps {
    title?: string; // Optional title displayed in the footer
    className?: string; // Optional additional CSS classes
    children?: React.ReactNode; // Add `children` prop explicitly
}

const FooterContainer: React.FC<FooterProps> = ({ title = 'FooterContainer', className, children }) => {
    const footerClassName = `footer ${className || ''}`; // Combine base and custom classes

    return (
        <footer className={footerClassName}>
            <div className="footer-title">{title}</div>
            <HorizontalContainer className="footer-content">{children}</HorizontalContainer>
        </footer>
    );
};

export default FooterContainer;