import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

const router=createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/add",
    element:<AddProduct/>
  },
  {
    path:"/",
    element:<Home/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>
)
