import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Delivery from "./pages/Delivery";
import Ride from "./pages/Ride";
import Bookride from "./pages/Bookride";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RidePicker from "./components/ui/RidePicker";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import History from "./pages/History";
import Applayout from "./components/layout/Applayout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/help", element: <Help /> },
      { path: "/delivery", element: <Delivery /> },
      { path: "/ride", element: <Ride /> },
      { path: "/book", element: <Bookride /> },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/pickup", element: <RidePicker /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/account", element: <Account /> },
      { path: "/history", element: <History /> },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      {/* Global SEO Meta Tags */}
      <Helmet>
        <title>Toto Wala - Affordable Rides & Delivery</title>
        <meta
          name="description"
          content="Toto Wala provides reliable, eco-friendly, and affordable Toto rides across India. Book now and travel hassle-free."
        />
        <meta
          name="keywords"
          content="Toto Wala, Toto Booking, E-rickshaw rides, Kolkata, Mumbai, India"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Toto Wala - Book Your Ride Easily" />
        <meta
          property="og:description"
          content="Book affordable Toto rides instantly across India. Convenient, safe, and eco-friendly travel at your doorstep."
        />
        <meta
          property="og:image"
          content="https://totowala.vercel.app//og-image.jpg"
        />
        <meta property="og:url" content="https://totowala.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
