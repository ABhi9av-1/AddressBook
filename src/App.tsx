import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Address } from './types';
import { HomePage } from './pages/HomePage';
import { AddressDetailsPage } from './pages/AddressDetailsPage';

const App: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage addresses={addresses} setAddresses={setAddresses} />} />
        <Route path="/details/:id" element={<AddressDetailsPage addresses={addresses} setAddresses={setAddresses} />} />
        <Route path="/details" element={<AddressDetailsPage addresses={addresses} setAddresses={setAddresses} />} />
      </Routes>
    </Router>
  );
};

export default App;