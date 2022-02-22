import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { deleteInvoice, getInvoice } from '../data';

// eslint-disable-next-line import/prefer-default-export
export default function Invoice() {
  const params = useParams();
  const navigate = useNavigate();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h1>
        Invoice #
        {invoice.id}
      </h1>
      <p>{invoice.date}</p>
      <p>{invoice.name}</p>
      <p>{invoice.amount}</p>
      <button
        type="submit"
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate('/invoices');
        }}
      >
        Delete
      </button>
    </main>
  );
}
