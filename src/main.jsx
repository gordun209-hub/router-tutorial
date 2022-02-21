import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Expenses } from "./routes/expenses";
import { Invoices } from "./routes/invoices";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route path={"expenses"} element={<Expenses />} />
          <Route path={"invoices"} element={<Invoices />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
