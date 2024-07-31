export const useLocalStorage = () => {
  const saveCustomer = (customer) => {
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
  };

  const getCustomers = () => {
    return JSON.parse(localStorage.getItem('customers')) || [];
  };

  return { saveCustomer, getCustomers };
};
