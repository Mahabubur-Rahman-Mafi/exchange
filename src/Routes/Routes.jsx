import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import DashBoard from "../Pages/DashBoard/DashBoard";
import CateProduct from "../Pages/Home/Category/CateProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import SignUp from "../Pages/Log/SignUp";
import Category from "../Pages/Porducts/Category";
import Product from "../Pages/Porducts/Product";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/product",
        element: <Product></Product>,
        loader: () => fetch("http://localhost:5000/categories"),
        children: [
          {
            path: "/product/category/:id",
            element: (
              <PrivateRoute>
                <Category></Category>
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/product/category/${params.id}`),
          },
        ],
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CateProduct></CateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: 'dashboard',
        element:<DashBoard></DashBoard>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default routes;
