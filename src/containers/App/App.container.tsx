/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.container
 * @description: App container
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Login from "./../../pages/Login";
import { RouterProvider, Route } from "react-router-dom";
import { RoutingFallback } from "../../components/Fallback";

/** @import Utilities */
import {
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";

/* --------------------------------------------- */

/**
 * @function App
 * @description Main functional component
 * @returns {JSX} A React element
 */
const App = () => {
   /** Setting app routes */
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={null} errorElement={<RoutingFallback />}>
            <Route path="/login" element={<Login />} />
         </Route>
      )
   );

   /* ----------------------- */

   return <RouterProvider router={router} />;
};

/* --------------------------------------------- */

/** @exports @default component */
export default App;
