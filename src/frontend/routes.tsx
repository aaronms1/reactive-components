import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainView from './@main-view';
import SideNavigation from './components/side-navigation';
import Grid from './pages/grid';
import Dropdown from './components/dropdown';
import MessageInputBar from './components/message-input-bar';
import Footer from './components/footer';

/**
 * <h1>{@link RouteConfig}</h1> interface provides strong typing for our routes,
 * including details such as path, component, and optional children.
 */
interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[]; // Optional nested routes
}

/**
 * Define the route configurations here.
 * The MainView serves as the parent route with nested routing logic.
 */
const routes: RouteConfig[] = [
    {
        path: '/',
        element: <MainView />, // Root of the application
        children: [
            {
                path: 'side-navigation-left',
                element: <SideNavigation position="left" />,
            },
            {
                path: 'side-navigation-right',
                element: <SideNavigation position="right" />,
            },
            {
                path: 'grid',
                element: <Grid columns={3} gap="20px" />,
            },
            {
                path: 'dropdown',
                element: <Dropdown />,
            },
            {
                path: 'message-input',
                element: (
                    <MessageInputBar
                        placeholder="Type your message here..."
                        onSend={(message: string) => {
                            console.log('Sent:', message);
                        }}
                    />
                ),
            },
            {
                path: 'footer',
                element: <Footer title="Footer Example">
                    <p>Custom footer content for this route.</p>
                </Footer>,
            },
        ],
    },
];

/**
 * <h1>{@link RouteGenerator}</h1> is a React functional component responsible for generating the application's routing structure.
 * It utilizes React Router to dynamically map routes and their optional child routes based on a predefined `routes` array.
 * This component also includes a fallback route to handle undefined paths, redirecting them to the root (`/`) path.
 *
 * Key Features:
 * - Maps and renders main and nested routes dynamically from the `routes` array.
 * - Handles child routes when specified in the `routes` array.
 * - Includes a fallback route to redirect unmatched paths to `/`.
 *
 * Dependencies:
 * - Requires `react-router-dom` for `Router`, `Routes`, `Route`, and `Navigate`.
 *
 * Usage:
 * Intended to serve as the primary routing mechanism for the application.
 */
const RouteGenerator: React.FC = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}>
                        {route.children &&
                            route.children.map((child, childIndex) => (
                                <Route
                                    key={childIndex}
                                    path={child.path}
                                    element={child.element}
                                />
                            ))}
                    </Route>
                ))}
                {/* Fallback to redirect to '/' for undefined routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default RouteGenerator;