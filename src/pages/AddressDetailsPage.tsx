// pages/AddressDetailsPage.tsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Address } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface AddressDetailsProps {
  addresses: Address[];
  setAddresses: (addresses: Address[]) => void;
}

export const AddressDetailsPage: React.FC<AddressDetailsProps> = ({ addresses, setAddresses }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = Boolean(id);
  const existing = addresses.find((a) => a.id === id);
  const [form, setForm] = useState<Address>(
    existing || { id: '', name: '', email: '', phone: '', street: '' }
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Full name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    if (!form.street) newErrors.street = 'Street address is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const newAddress = { ...form, id: editing ? form.id : uuidv4() };
    const updated = editing
      ? addresses.map(a => (a.id === form.id ? newAddress : a))
      : [...addresses, newAddress];

    setAddresses(updated);
    navigate('/');
  };

  const handleDelete = () => {
    setAddresses(addresses.filter(a => a.id !== form.id));
    navigate('/');
  };

  return (
    <main className="govuk-width-container">
      <h1 className="govuk-heading-l">{editing ? 'Edit address' : 'Add new address'}</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className={`govuk-form-group${errors.name ? ' govuk-form-group--error' : ''}`}>
          <label className="govuk-label" htmlFor="name">Full name</label>
          {errors.name && <p className="govuk-error-message">{errors.name}</p>}
          <input className="govuk-input" id="name" name="name" type="text" value={form.name} onChange={handleChange} />
        </div>

        <div className={`govuk-form-group${errors.email ? ' govuk-form-group--error' : ''}`}>
          <label className="govuk-label" htmlFor="email">Email</label>
          {errors.email && <p className="govuk-error-message">{errors.email}</p>}
          <input className="govuk-input" id="email" name="email" type="email" value={form.email} onChange={handleChange} />
        </div>

        <div className={`govuk-form-group${errors.phone ? ' govuk-form-group--error' : ''}`}>
          <label className="govuk-label" htmlFor="phone">Phone number</label>
          {errors.phone && <p className="govuk-error-message">{errors.phone}</p>}
          <input className="govuk-input" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
        </div>

        <div className={`govuk-form-group${errors.street ? ' govuk-form-group--error' : ''}`}>
          <label className="govuk-label" htmlFor="street">Street address</label>
          {errors.street && <p className="govuk-error-message">{errors.street}</p>}
          <input className="govuk-input" id="street" name="street" type="text" value={form.street} onChange={handleChange} />
        </div>

        <div className="govuk-button-group">
          <button className="govuk-button" type="submit">Save and continue</button>
          {editing && (
            <button type="button" onClick={handleDelete} className="govuk-button govuk-button--secondary">
              Delete address
            </button>
          )}
          <button type="button" className="govuk-link" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};
