import React from 'react'
import {

  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Home from './page/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route element={<RootLayout/>}>
              <Route path="/" element={<Home/>} />
  
          </Route>
        </Route>
    )
  );


  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
