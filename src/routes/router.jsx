import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRouter from "../private/PrivateRouter";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import LoadingSpinner from "../shared/LoadingSpinner";
import DashboarLayout from "../layouts/DashboarLayout";
import Dashboard from "../pages/dashboard/dashboard";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BlogPage from "../pages/BlogPage";
import AddTransaction from "../pages/dashboard/AddTransaction";
import MyTransactions from "../pages/dashboard/MyTransactions";
import Financials from "../pages/Financials";
import TransactionDetails from "../shared/TransactionDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "blog",
        Component: BlogPage,
      },

      {
        path: "financials",
        element: (
          <PrivateRouter>
            <Financials />
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
        path: "transaction-details/:id",
        element: (
          <PrivateRouter>
            <TransactionDetails />
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
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashboarLayout />
      </PrivateRouter>
    ),
    children: [
      { index: true, Component: Dashboard },
      { path: "addTransaction", Component: AddTransaction },
      {
        path: "details/:id",
        Component: DetailsPage 
      },
      { path: "myTransaction", Component: MyTransactions },
    ],
  },
]);
export default router;
