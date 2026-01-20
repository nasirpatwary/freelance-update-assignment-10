import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRouter from "../private/PrivateRouter";
import Reports from "../pages/Reports";
import MyTransactions from "../pages/MyTransactions";
import AddTransaction from "../pages/AddTransaction";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "addTransaction",
        element: (
          <PrivateRouter>
            <AddTransaction />
          </PrivateRouter>
        ),
      },
      {
        path: "myTransactions",
        element: (
          <PrivateRouter>
            <MyTransactions />
          </PrivateRouter>
        ),
      },
      {
        path: "reports",
        element: (
          <PrivateRouter>
            <Reports />
          </PrivateRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRouter>
            <DetailsPage />
          </PrivateRouter>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
export default router;
