import { createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Main from "./LayOut/Main";
import About from './components/About/About'
import Orders from "./components/Orders/Orders";
import Inventory from './components/Inventory/Inventory'
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Login from './components/Login/Login'
import SignIn from './components/Sign_In/SignIn'

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,children:[
            {
                path:"/",
                loader: ()=> fetch('products.json'),
                element: <Shop></Shop>
            },
            {
                path:"/shop",
                loader: ()=> fetch('products.json'),
                element: <Shop></Shop>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path:"/inventory",
                element:<Inventory></Inventory>
            },
             {
                path:"/login",
                element: <Login />
             },
             {
                path:'/signup',
                element:<SignIn />
             }
        ]
    }
])