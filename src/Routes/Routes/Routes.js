import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
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
        element: (
          <PrivateRoutes>
            <Courses></Courses>
          </PrivateRoutes>
        ),
        // loader: () => fetch("MOCK_DATA.json"),
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
        element: <p>This is course detail</p>,
      },
    ],
  },
]);
