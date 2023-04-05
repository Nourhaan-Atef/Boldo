import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Blog from "../Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/About", element: <About /> },
      { path: "/Blog", element: <Blog /> },
    ],
  },
]);
