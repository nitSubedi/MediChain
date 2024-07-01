import React, { useState } from 'react';
import { useLoaderData, useNavigate, redirect, json } from 'react-router-dom';
import { getUserData, grantReadAccess, revokeReadAccess, grantUpdateAccess, revokeUpdateAccess } from '../../utils/api';

export async function loader() {
  const token = localStorage.getItem('authToken');
  console.log(token)
  if (!token) {
    return redirect('/login'); // Redirect if no token
  }
  const res = await getUserData();
  return json(res.data);
}

function PatientDash() {
  const navigate = useNavigate();
  const data = useLoaderData();
  
  const [providerAddress, setProviderAddress] = useState('');

  console.log(data);

  function handleClick() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    navigate('/login');
  }

  const handleGrantReadAccess = async () => {
    try {
      const response = await grantReadAccess(data.walletAddress, providerAddress);
      alert(response.message);
    } catch (error) {
      console.error('Error granting read access:', error);
      alert('Failed to grant read access');
    }
  };

  const handleRevokeReadAccess = async () => {
    try {
      const response = await revokeReadAccess(data.walletAddress, providerAddress);
      alert(response.message);
    } catch (error) {
      console.error('Error revoking read access:', error);
      alert('Failed to revoke read access');
    }
  };

  const handleGrantUpdateAccess = async () => {
    try {
      const response = await grantUpdateAccess(data.walletAddress, providerAddress);
      alert(response.message);
    } catch (error) {
      console.error('Error granting update access:', error);
      alert('Failed to grant update access');
    }
  };

  const handleRevokeUpdateAccess = async () => {
    try {
      const response = await revokeUpdateAccess(data.walletAddress, providerAddress);
      alert(response.message);
    } catch (error) {
      console.error('Error revoking update access:', error);
      alert('Failed to revoke update access');
    }
  };

  

  return (
    <div>
      <h1>Welcome to MediChain Patient Dashboard</h1>
      <div>
        <p>Your wallet address is {data.walletAddress}</p>
        User Information
        <br />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        <label htmlFor='providerAddress'>Provider Wallet Address: </label>
        <input
          type='text'
          id='providerAddress'
          value={providerAddress}
          onChange={(e) => setProviderAddress(e.target.value)}
          placeholder="Enter provider's wallet address"
        />
      </div>
      <button onClick={handleGrantReadAccess}>Grant Read Access</button>
      <button onClick={handleRevokeReadAccess}>Revoke Read Access</button>
      <button onClick={handleGrantUpdateAccess}>Grant Update Access</button>
      <button onClick={handleRevokeUpdateAccess}>Revoke Update Access</button>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
}

export default PatientDash;
