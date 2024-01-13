import React from "react"
import PathConstants from "./pathConstants"
// import Layout from "../components/Layout"

const Home = React.lazy(() => import("../pages/Home"))
// const Team = React.lazy(() => import("../pages/Team"))
// const Portfolio = React.lazy(() => import("../pages/Portfolio"))
const About = React.lazy(() => import("../pages/About"))
// NEW STUFF
// const Product = React.lazy(() => import("../pages/Product"))
const Contact = React.lazy(() => import("../pages/Contact"))
const Products = React.lazy(() => import("../pages/Products"))




const routes = [ // Catch-all route for the root path ("/")
  // Catch-all route for the root path ("/")
    { path: "/", element: <Home /> },
    { path: PathConstants.HOME, element: <Home /> },
    // { path: PathConstants.TEAM, element: <Team /> },
    // { path: PathConstants.PORTFOLIO, element: <Portfolio /> },
    { path: PathConstants.ABOUT, element: <About /> },
    //NEW STUFF 
    { path: PathConstants.CONTACT, element: <Contact /> },
    { path: PathConstants.PRODUCTS, element: <Products /> },

]
export default routes;
