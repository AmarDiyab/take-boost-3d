import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SmoothScrolling from "./utils/lenis";
import CursorFollower from "./CustomCursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorFollower />
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </React.StrictMode>
);
