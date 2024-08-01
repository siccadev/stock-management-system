import React, { useState } from 'react';

const StockManagement = () => {
  const [stockItems, setStockItems] = useState([]);
  const [newItem, setNewItem] = useState({});

  const addItem = () => {
    // Add new stock item logic
    const item = {
      id: stockItems.length + 1,
      ...newItem
    };
    setStockItems([...stockItems, item]);
  };

  const updateItem = (id, updatedItem) => {
    // Update stock item logic
    setStockItems(stockItems.map(item => item.id === id ? { ...item, ...updatedItem } : item));
  };

  const deleteItem = (id) => {
    // Delete stock item logic
    setStockItems(stockItems.filter(item => item.id !== id));
  };

  return (
    <div className="stock-management">
      <h1>Stock Management</h1>
      <p>Manage your stock items here.</p>
      <div>
        <input
          type="text"
          placeholder="Item details"
          onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}
        />
        <button onClick={addItem}>Add New Stock Item</button>
      </div>
      <ul>
        {stockItems.map((item) => (
          <li key={item.id}>
            {item.details}
            <button onClick={() => updateItem(item.id, { details: 'Updated details' })}>Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockManagement;
