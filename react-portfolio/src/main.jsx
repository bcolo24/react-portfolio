import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { createTheme } from '@mui/material/styles';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#A9927D',
      secondary: '#5E503F',
      light: '#F2F4F3',
      dark: '#0A0908',
      contrast: '#49111C'
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
