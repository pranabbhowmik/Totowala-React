import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Delivery from "./pages/Delivery";
import Ride from "./pages/Ride";
import "./App.css";
import Applayout from "./components/layout/Applayout";
import Bookride from "./pages/Bookride";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RidePicker from "./components/ui/RidePicker";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import History from "./pages/History";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/delivery",
          element: <Delivery />,
        },
        {
          path: "/ride",
          element: <Ride />,
        },
        {
          path: "/book",
          element: <Bookride />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/pickup",
          element: <RidePicker />,
        },
        {
          path: "/wallet",
          element:<Wallet />
        },
        {
          path: "/Account",
          element: <Account />
        },
        {
          path: "/History",
          element: <History />
        }
       

        

      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
