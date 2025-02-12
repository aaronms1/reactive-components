import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Grid from './pages/grid';
import Dropdown from './components/dropdown';
import SideNavigation from './components/side-navigation';
import MessageInputBar from './components/message-input-bar';

/**
 * MainView component serves as the root mapping for the application.
 * It demonstrates how to use all available components together, arranged on the `/` and `/home` routes.
 */
const MainView: React.FC = () => {
    return (
        <div className="main-view">
            <Header title="Main App Header">
                <Dropdown />
            </Header>

            <div className="side-navigation-example">
                <SideNavigation position="left" />
                <SideNavigation position="right" />
            </div>

            <div className="content-section">
                <h2>Dynamic Grid Example</h2>
                <Grid columns={3} gap="20px" />
            </div>

            <div className="message-input-section">
                <MessageInputBar
                    placeholder="Type your message here..."
                    onSend={(message: string) => {
                        console.log('Sent:', message);
                    }}
                />
            </div>

            <Footer title="Footer Example">
                <p>Custom footer content goes here.</p>
            </Footer>
        </div>
    );
};

export default MainView;