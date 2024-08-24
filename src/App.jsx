import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Store from "./Components/Store";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import Cart from "./Components/Cart";
import CartContext from "./Context/cartContext";

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
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }
])
export default function App(){
  return(
    <CartContext>
      <RouterProvider router={route}/>
    </CartContext>
  );
}