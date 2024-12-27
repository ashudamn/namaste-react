import React , {lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import RestaurantMenu from "./RestaurantMenu.js";
import Error from "./Error.js";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const AboutLazyLoaded = lazy(()=>import("./About.js"));
const ContactLazyLoaded = lazy(()=>import("./Contact.js"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h2>Loading</h2>}><AboutLazyLoaded /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h2>Loading</h2>}><ContactLazyLoaded /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);