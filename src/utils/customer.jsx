// src/utils/customer.js

export const useLocalStorage = () => {
  const saveCustomer = (customers) => {
    localStorage.setItem('customers', JSON.stringify(customers));
  };

  const getCustomers = () => {
    return JSON.parse(localStorage.getItem('customers')) || [];
  };

  const addCustomer = (customer) => {
    let customers = getCustomers();
    customers.push(customer);
    saveCustomer(customers);
  };

  const editCustomer = (index, updatedCustomer) => {
    let customers = getCustomers();
    if (index >= 0 && index < customers.length) {
      customers[index] = updatedCustomer;
      saveCustomer(customers);
    }
  };

  const deleteCustomer = (index) => {
    let customers = getCustomers();
    if (index >= 0 && index < customers.length) {
      customers.splice(index, 1);
      saveCustomer(customers);
    }
  };

  return { addCustomer, editCustomer, deleteCustomer, getCustomers };
};
