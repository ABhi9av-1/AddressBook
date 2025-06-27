import React from 'react';
import { Link } from 'react-router-dom';
import type { Address } from '../types';

interface AddressListProps {
  addresses: Address[];
  setAddresses: (addresses: Address[]) => void;
}

export const AddressList: React.FC<AddressListProps> = ({ addresses, setAddresses }) => {
  const handleDelete = (id: string) => setAddresses(addresses.filter(addr => addr.id !== id));

  return (
    <ul className="govuk-list">
      {addresses.map(addr => (
        <li key={addr.id} className="govuk-!-margin-bottom-3">
          <strong>{addr.name}</strong><br />
          <span>{addr.email}</span><br />
          <span>{addr.phone}</span><br />
          <Link to={`/details/${addr.id}`} className="govuk-link">Edit</Link>
          {' | '}
          <button className="govuk-link" onClick={() => handleDelete(addr.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};