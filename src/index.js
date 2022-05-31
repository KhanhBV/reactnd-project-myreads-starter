import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./Pages/SearchPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/search' element={<Index />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
