import { createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Main from "./LayOut/Main";
import About from './components/About/About'
import Orders from "./components/Orders/Orders";
import Inventory from './components/Inventory/Inventory'
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,children:[
            {
                path:"/",
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
        ]
    }
])