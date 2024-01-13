// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'
// imporrt 

// export default function App() {
//   return (

//     <div>

//     </div>
//   )
// }

//--- part 2 

// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to = "/">Home</Link>
//               </li>
//               <li>
//                 <Link to = "/about">About</Link>
//               </li>
//               <li>
//                 <Link to = "/contact">Contact</Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes>
//             <Route path = "/" element = {<Home/>} />
//             <Route path = "/about" element = {<About/>} />
//             <Route path = "/contact" element = {<Contact/>} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


//---
// ./App.js

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
