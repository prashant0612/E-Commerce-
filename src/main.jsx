import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Shop from './components/Shop/Shop.jsx'
import Men from './components/Men/Men.jsx'
import Women from './components/Women/Women.jsx'
import Kids from './components/Kids/Kids.jsx'
import Login from './components/Login/Login.jsx'
import Cart from './components/Cart/Cart.jsx' 
import SingleProductPage from './components/SingleProductPage/SingleProductPage.jsx'


const router = createBrowserRouter([
  {
    path:'login',
    element:<Login/>
  },
  
  {
    path: '/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<Shop />
      },
      {
        path:"Men",
        element:<Men />
      },
      {
        path:'Women',
        element:<Women />
      },
      {
        path:"Kids",
        element:<Kids />
      },
      {
        path:'Cart',
        element:<Cart />
      },
      {
        path:'/singlePage/:productId',
        element:<SingleProductPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  
)