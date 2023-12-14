import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import ContactUs from './pages/contact';
import ReactDOM from 'react-dom/client';
import Aboutus from './pages/Aboutus'; 
import Errorcom from './components/ErrorCom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorcom />
  },
  {
     path: '/contact',
    element: <ContactUs/>
  },
  {
    path: "/Aboutus",
    element: <Aboutus/>
  },
  

  

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);



//NB TO INCLUDE < app/> for it to show
//const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render( 
 // <React.StrictMode>
 //   <App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();