import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Foods from "../Pages/Foods/Foods";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Features from "../Pages/Features/Features";
import UpdateFoods from "../Pages/UpdateFoods/UpdateFoods";
import MyOrderFoods from "../Pages/MyOrderFoods/MyOrderFoods";
import MyAddFoods from "../Pages/MyAddFoods/MyAddFoods";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/foods",
        element: <Foods></Foods>,
        loader: () => fetch("http://localhost:5000/foodsCount"),
      },
      {
        path: "/checkOut/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>

      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateFoods/:id",
        element: <UpdateFoods></UpdateFoods>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/myOrderFoods",
        element:<PrivateRoute><MyOrderFoods></MyOrderFoods></PrivateRoute>
      },
      {
        path: "/myAddFoods",
        element: <PrivateRoute><MyAddFoods></MyAddFoods></PrivateRoute>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
