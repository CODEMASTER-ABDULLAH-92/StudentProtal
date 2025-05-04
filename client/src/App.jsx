import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ScholarshipRulesPage from './pages/Awarded';
import Educational from './pages/Educational';
import Docs from './pages/Docs';
import Address from './pages/Address';
import PersonalDetail from './pages/PersonalDetails';
import Navbar from './Componnet/Navbar';
import Footer from './Componnet/Footer';
import Home from './pages/Home';
import Cookies from "js-cookie";
import ProtectedRoute from './pages/Protected';
import NotFoundPage from './pages/404';


const App = () => {
  // const token = Cookies.get("accessToken");
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}

        {/* Protected Routes */}
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path="/award" element={<ProtectedRoute element={<ScholarshipRulesPage />} />} />
        <Route path="/personal" element={<ProtectedRoute element={<PersonalDetail />} />} />
        <Route path="/educational" element={<ProtectedRoute element={<Educational />} />} />
        <Route path="/docs" element={<ProtectedRoute element={<Docs />} />} />
        <Route path="/address" element={<ProtectedRoute element={<Address />} />} />
      </Routes>
      <Footer />
      {/* Showing more scholarships and make it more froms for others persons and university can upload there schilarships and applicants make apply here Adding the seacrhing and filertesr */}
    </div>
  );
};

export default App;
