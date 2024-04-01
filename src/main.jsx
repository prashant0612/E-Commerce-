import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Shop from './components/Shop/Shop.jsx';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';
import Login from './components/Login/Login.jsx';
import Cart from './components/Cart/Cart.jsx'; 
import SingleProductPage from './components/SingleProductPage/SingleProductPage.jsx';
import { CartProvider } from './components/CartContext.jsx';

const App = () => {
  

  const router = createBrowserRouter([
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '',
          element: <Shop />
        },
        {
          path: "Men",
          element: <Men />
        },
        {
          path: 'Women',
          element: <Women />
        },
        {
          path: "Kids",
          element: <Kids />
        },
        {
          path: 'Cart',
          element: <Cart />
        },
        {
          path: '/singlePage/:productId',
          element: <SingleProductPage />
        }
      ]
    }
  ]);

  return (
    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
