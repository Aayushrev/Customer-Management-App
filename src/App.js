import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import { AuthProvider } from './context/AuthContext';
import { CustomerProvider } from './context/CustomerContext';
import './styles.css';

const App = () => {
  return (
    <AuthProvider>
      <CustomerProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/customers" element={<CustomerList />} />
          </Routes>
        </Router>
      </CustomerProvider>
    </AuthProvider>
  );
};

export default App;
