import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Expenses } from './routes/expenses';
import { Invoices } from './routes/invoices';
import Invoice from './routes/invoice';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={(
                <main style={{ padding: '1rem' }}>
                  <h1>Invoices</h1>
                  <p>This is the invoices page.</p>
                </main>
              )}
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={(
              <div>
                <h1>404</h1>
                <p>Page not found</p>
              </div>
            )}
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
