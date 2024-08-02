// src/context/CustomerContext.js
import React, { createContext, useState, useContext } from 'react';
import { useLocalStorage } from '../utils/customer';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const { addCustomer, editCustomer, deleteCustomer, getCustomers } = useLocalStorage();
  const [customers, setCustomers] = useState(getCustomers());

  const handleAddCustomer = (customer) => {
    addCustomer(customer);
    setCustomers(getCustomers());
  };

  const handleEditCustomer = (index, updatedCustomer) => {
    editCustomer(index, updatedCustomer);
    setCustomers(getCustomers());
  };

  const handleDeleteCustomer = (index) => {
    deleteCustomer(index);
    setCustomers(getCustomers());
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer: handleAddCustomer, editCustomer: handleEditCustomer, deleteCustomer: handleDeleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
