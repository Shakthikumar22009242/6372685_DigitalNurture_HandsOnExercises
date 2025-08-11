// src/App.js
import React from 'react';
import logo from './logo.jpg';

function App() {
  const office = {
    name: 'Prime Business Center',
    rent: 55000,
    address: '123 Main Street, Downtown',
    imageUrl: logo,
  };

  const officeSpaces = [
    { id: 1, name: 'Prime Business Center', rent: 55000, address: '123 Main Street, Downtown' },
    { id: 2, name: 'Cityscape Tower', rent: 65000, address: '456 City Road, Midtown' },
    { id: 3, name: 'Greenview Offices', rent: 48000, address: '789 Green Blvd, Uptown' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Heading */}
      <h1>Office Space Rental</h1>

      {/* Display office image */}
      <img
        src={office.imageUrl}
        alt="Office Space"
        style={{ width: '400px', height: '200px', marginBottom: '20px', borderRadius: '8px' }}
      />

      {/* Display single office details */}
      <div style={{ marginBottom: '30px' }}>
        <h2>{office.name}</h2>
        <p>
          Rent: 
          <span
            style={{
              color: office.rent < 60000 ? 'red' : 'green',
              fontWeight: 'bold',
              marginLeft: '5px',
            }}
          >
            ₹{office.rent}
          </span>
        </p>
        <p>Address: {office.address}</p>
      </div>

      {/* Loop through list of offices */}
      <h2>Available Office Spaces</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {officeSpaces.map(({ id, name, rent, address }) => (
          <li
            key={id}
            style={{
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            <h3>{name}</h3>
            <p>
              Rent: 
              <span
                style={{
                  color: rent < 60000 ? 'red' : 'green',
                  fontWeight: 'bold',
                  marginLeft: '5px',
                }}
              >
                ₹{rent}
              </span>
            </p>
            <p>Address: {address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
