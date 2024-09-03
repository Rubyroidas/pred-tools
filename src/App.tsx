import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {ItemsPage} from './pages/items/ItemsPage';
import './App.css';
import {CommsPage} from './pages/comms/CommsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CommsPage/>,
    },
    {
        path: '/items',
        element: <ItemsPage/>,
    },
    {
        path: '/comms',
        element: <CommsPage/>,
    },
]);

export const App = () => (
    <RouterProvider router={router} />
);
