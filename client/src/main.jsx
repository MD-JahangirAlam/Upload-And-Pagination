import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import ProductPage from './components/ProductPage/ProductPage';
import HomPage from './components/HomPage';
import Upload from './components/UserUpload/Upload';



const Root = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    children: [
      {
        index: '/',
        element: <HomPage />
      },
      {
        path: '/userlogin',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/product',
        element: <ProductPage />
      },
      {
        path: '/product/:categury',
        element: <ProductPage />
      },
      {
        path: '/userupload',
        element: <Upload />
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Root} />
)
