import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import KitchenConfigForm from './pages/KitchenConfig/KitchenForm';
import LandingPage from './pages/Landing/Landing';
import LoginPage from './pages/LogIn/LogIn';
import SignUpPage from './pages/SignIn/SignIn';
import PDFViewer from './pages/PdfViewr/PdfViewr';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KitchenForm" element={<KitchenConfigForm />} />
        <Route path="/Main" element={<LandingPage />} />
        <Route path="/LogIn" element={<LoginPage />} />
        <Route path="/SignIn" element={<SignUpPage />} />
        <Route path="/PdfViewr" element={<PDFViewer />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
