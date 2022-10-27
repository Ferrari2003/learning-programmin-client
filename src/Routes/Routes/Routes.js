import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Error from "../../Pages/404/Error";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetail from "../../Pages/Courses/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(`https://leran-hive.elhameduaid.com/courses/${params.id}`),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
