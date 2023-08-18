
import { createBrowserRouter } from "react-router-dom";

import App from './App';

// Importing custom components.
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';

// This method is from the react-router library.
// It is not react, it works with react.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/car/:id",
                element: <Car />
            }
        ]
    }
]);

export default router;
