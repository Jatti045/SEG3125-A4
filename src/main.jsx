import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </Router>
);
