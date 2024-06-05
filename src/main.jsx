import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";


import AutheProvider from './Auth/AutheProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { router } from './routes/Route.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AutheProvider>
   <RouterProvider router={router} />
   <Toaster></Toaster>
   </AutheProvider>
    
    <App />
  </React.StrictMode>,
)
