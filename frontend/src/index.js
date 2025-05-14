import React from 'react';
import { render } from "react-dom";
import App from './App';
import { UserProvider } from './context/UserContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const root = document.getElementById("root");
render(
  <UserProvider>
    <App />
  </UserProvider>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals