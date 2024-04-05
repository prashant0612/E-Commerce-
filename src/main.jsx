import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Men from "./components/Men/Men.jsx";
import Women from "./components/Women/Women.jsx";
import Kids from "./components/Kids/Kids.jsx";
import Cart from "./components/Cart/Cart.jsx";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Shop />,
        },
        {
          path: "Men",
          element: <Men />,
        },
        {
          path: "Women",
          element: <Women />,
        },
        {
          path: "Kids",
          element: <Kids />,
        },
        {
          path: "Cart",
          element: <Cart />,
        },
        {
          path: "/singlePage/:productId",
          element: <SingleProductPage />,
        },
      ],
    },
  ]);

  return (
    <Auth0Provider
      domain="dev-vztf56eskda1aufj.us.auth0.com"
      clientId="XAzZiy2JqSkX7Dp5yYdoT0hwObKxsLQ0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Auth0Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
