import React, { createContext, useState, useContext } from 'react';
import { useLocalStorage } from '../utils/customer';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const { saveCustomer, getCustomers } = useLocalStorage();
  const [customers, setCustomers] = useState(getCustomers());

  const addCustomer = (customer) => {
    saveCustomer(customer);
    setCustomers(getCustomers());
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
