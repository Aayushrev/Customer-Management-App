// src/components/CustomerList.jsx

import React, { useState } from 'react';
import { useCustomerContext } from '../context/CustomerContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CustomerList.css';

const CustomerList = () => {
  const { customers, editCustomer, deleteCustomer } = useCustomerContext();
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({ name: '', lastName: '', phone: '', address: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setUpdatedCustomer(customers[index]);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (updatedCustomer.name && updatedCustomer.lastName && updatedCustomer.phone && updatedCustomer.address) {
      editCustomer(editingIndex, updatedCustomer);
      toast.success('Customer updated successfully!');
      setEditingIndex(null);
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const handleDelete = (index) => {
    deleteCustomer(index);
    toast.success('Customer deleted successfully!');
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div className="customer-list-container">
      <h2>Customer List</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.lastName}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td className="action-buttons">
                  <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingIndex !== null && (
        <div className="edit-form">
          <h3>Edit Customer</h3>
          <form onSubmit={handleUpdate}>
            <label>Name:</label>
            <input
              type="text"
              value={updatedCustomer.name}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, name: e.target.value })}
              required
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={updatedCustomer.lastName}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, lastName: e.target.value })}
              required
            />
            <label>Phone:</label>
            <input
              type="text"
              value={updatedCustomer.phone}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, phone: e.target.value })}
              required
            />
            <label>Address:</label>
            <input
              type="text"
              value={updatedCustomer.address}
              onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, address: e.target.value })}
              required
            />
            <button type="submit" className="update-button">Update</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CustomerList;
