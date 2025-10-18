import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Style.css"; // ✅ import here (your Tailwind CSS file)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
