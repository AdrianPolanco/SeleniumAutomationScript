import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './screens/Login'
import SignUp from './screens/SignUp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
    },
  {
    path: "/sign-up",
    element: <SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
