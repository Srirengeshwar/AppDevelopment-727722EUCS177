import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/plans')
      .then(response => {
        setPlans(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
        setError('Error fetching plans. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map(plan => (
          <div key={plan.id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-700">Amount: ${plan.amount.toFixed(2)}</p>
            <p className="text-gray-700">Validity: {plan.validity}</p>
            <p className="text-gray-700">Data: {plan.data} MB</p>
            <p className="text-gray-700">Type: {plan.type}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Recharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePlans;
