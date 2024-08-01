import React, { useState } from 'react';
import './Billing.css';
const Billing = () => {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({});

  const generateInvoice = () => {
    // Generate invoice logic
    const invoice = {
      id: invoices.length + 1,
      ...newInvoice
    };
    setInvoices([...invoices, invoice]);
  };

  const sendInvoiceByEmail = (invoice) => {
    // Send invoice via email logic
    console.log(`Invoice ${invoice.id} sent to ${invoice.email}`);
  };

  return (
    <div className="billing">
      <h1>Billing</h1>
      <p>Manage your invoices and payments here.</p>
      <div>
        <input
          type="text"
          placeholder="Invoice details"
          onChange={(e) => setNewInvoice({ ...newInvoice, details: e.target.value })}
        />
        <button onClick={generateInvoice}>Create Invoice</button>
      </div>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.details}
            <button onClick={() => sendInvoiceByEmail(invoice)}>Send by Email</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Billing;
