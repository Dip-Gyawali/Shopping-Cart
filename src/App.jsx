import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Store from "./Components/Store";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: '/',
        element: <Store/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])
export default function App(){
  return(
    <RouterProvider router={route}/>
  );
}