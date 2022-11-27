import { createBrowserRouter } from "react-router-dom";
import Dash from "../Pages/DashBoard/Dash";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import CateProduct from "../Pages/Home/Category/CateProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import SignUp from "../Pages/Log/SignUp";
import Category from "../Pages/Porducts/Category";
import Product from "../Pages/Porducts/Product";
import PrivateRoute from "./PrivateRoute";
import Seller from "../Pages/DashBoard/Seller/Seller";
import Buyer from "../Pages/DashBoard/Buyer";
import AdminRoute from "./AdminRoute";

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
        path: "dashboard",
        element: <Dash></Dash>,
      },
      {
        path: "seller",
        element: (
          <AdminRoute>
            <Seller></Seller>
          </AdminRoute>
        ),
      },
      {
        path: "buyer",
        element: (
          <AdminRoute>
            {" "}
            <Buyer></Buyer>
          </AdminRoute>
        ),
      },
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
