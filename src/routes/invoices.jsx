import {
  NavLink,
  Outlet,
  useLocation,
    useSearchParams,
} from 'react-router-dom';
import React from 'react';
import { getInvoices } from '../data';

// eslint-disable-next-line react/prop-types
function QueryNavLink({ to, ...props }) {
    const location = useLocation();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NavLink to={to + location.search} {...props} />;
}

export function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            const filter = event.target.value;
            // eslint-disable-next-line no-unused-expressions
            filter ? setSearchParams({ filter }) : setSearchParams({});
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => ({
                padding: '1rem',
                textDecoration: 'none',
                color: isActive ? 'red' : 'black',
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
