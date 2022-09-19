import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import client from "services/apoloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthProvider } from "contexts/authContext";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
