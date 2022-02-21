import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Expenses } from "./routes/expenses";
import { Invoices } from "./routes/invoices";
import { Invoice } from "./routes/invoice";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route path={"expenses"} element={<Expenses />} />
          <Route path={"invoices"} element={<Invoices />}>
            <Route path={":invoiceId"} element={<Invoice />} />
          </Route>
          <Route
            path={"*"}
            element={
              <div>
                <h1>404</h1>
                <p>Page not found</p>
              </div>
            }
          />
          }
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
