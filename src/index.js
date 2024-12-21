// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Для React 18+

import "./index.css";
import { App } from "./App"; // Імпортуємо App як named export

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
