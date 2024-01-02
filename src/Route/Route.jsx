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
        loader: () =>
          fetch("https://bangla-restaurant-server-side.vercel.app/foodsCount"),
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(
            `https://bangla-restaurant-server-side.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
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
        element: <Profile></Profile>,
        loader: () =>
          fetch("https://bangla-restaurant-server-side.vercel.app/addCart"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "updateFoods",
        element: <UpdateFoods></UpdateFoods>,
        loader: ({ params }) =>
          fetch(
            `https://bangla-restaurant-server-side.vercel.app/newFoods/${params.id}`
          ),
      },
      {
        path: "/feature",
        element: <Features></Features>,
      },
      {
        path: "/myOrderFoods",
        element: <MyOrderFoods></MyOrderFoods>,
      },
      {
        path: "/myAddFoods",
        element: <MyAddFoods></MyAddFoods>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  }
]);

export default Router;
