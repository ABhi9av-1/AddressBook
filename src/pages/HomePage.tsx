import React from 'react';
import { Link } from 'react-router-dom';
import type { Address } from '../types';
import { AddressList } from '../components/AddressList';

interface HomeProps {
  addresses: Address[];
  setAddresses: (addresses: Address[]) => void;
}

export const HomePage: React.FC<HomeProps> = ({ addresses, setAddresses }) => (
  <main className="govuk-width-container">
    <h1 className="govuk-heading-l">Address book</h1>
    <Link to="/details" className="govuk-button">Add a new address</Link>
    <AddressList addresses={addresses} setAddresses={setAddresses} />
  </main>
);