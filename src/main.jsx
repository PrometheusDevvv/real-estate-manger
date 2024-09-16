import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
  },
]);

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  
  </StrictMode>,
)
