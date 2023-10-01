import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter Es el componente que se encarga de conectar su aplicación a la URL del navegador. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
