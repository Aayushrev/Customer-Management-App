import React, { useState } from 'react';
import { useCustomerContext } from '../context/CustomerContext';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
  const { addCustomer } = useCustomerContext();
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    // Name validation
    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

    // Last name validation
    if (!lastName) {
      setLastNameError('Last name is required');
      valid = false;
    } else {
      setLastNameError('');
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone must be 10 digits');
      valid = false;
    } else {
      setPhoneError('');
    }

    // Address validation
    if (!address) {
      setAddressError('Address is required');
      valid = false;
    } else {
      setAddressError('');
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const customer = { name, lastName, phone, address };
      addCustomer(customer);
      navigate('/customers');  // Redirect to customer list
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Customer</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {nameError && <p className="error">{nameError}</p>}
      
      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      {lastNameError && <p className="error">{lastNameError}</p>}
      
      <label>Phone:</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {phoneError && <p className="error">{phoneError}</p>}
      
      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      {addressError && <p className="error">{addressError}</p>}
      
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomer;
