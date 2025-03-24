import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

// Define the routes (only Home)
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
        }
    ],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }
    }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
