import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import "./index.css";
import App from "./ReactComponents/App/App.jsx";
import { createRoot } from "react-dom/client"


const container = document.getElementById("root")
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);