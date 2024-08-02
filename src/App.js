import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import { AuthProvider } from './context/AuthContext';
import { CustomerProvider } from './context/CustomerContext';
import './styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component to conditionally render Navbar
const AppLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      {children}
      <ToastContainer />  {/* Add ToastContainer here */}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CustomerProvider>
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/add-customer" element={<AddCustomer />} />
              <Route path="/customers" element={<CustomerList />} />
            </Routes>
          </AppLayout>
        </Router>
      </CustomerProvider>
    </AuthProvider>
  );
};

export default App;
