import './App.css';
import  Demo from './components/calendario'
import { Formulario } from "./components/Formulario";
import { Tareas } from "./components/Tareas";
import "./App.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/calendario",
    element: (
      <Demo></Demo>
    ),
  },
  {
    path: "/tareas",
    element: <Tareas></Tareas>
  },
  {
    path: "/formulario",
    element: <Formulario></Formulario>
  },
]);


function App() {
  return (
    <div className="App">
      
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
