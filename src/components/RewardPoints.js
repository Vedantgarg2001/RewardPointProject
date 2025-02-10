import React from 'react';
import '../styles/RewardPoints.css';

const calculateRewardPoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100); 
    points += 1 * 50; 
  } else if (amount > 50) {
    points += 1 * (amount - 50); 
  }
  return points;
};

const RewardPoints = ({ transactions }) => {
  
  const customerRewards = transactions.reduce((acc, transaction) => {
    const points = calculateRewardPoints(transaction.amount);
    if (!acc[transaction.customerId]) {
      acc[transaction.customerId] = { customerId: transaction.customerId, name: transaction.name, points: 0 };
    }
    acc[transaction.customerId].points += points;
    return acc;
  }, {});

  return (
    <div className="reward-points">
      <h2>Customer Reward Points</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Total Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(customerRewards).map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.name}</td>
              <td>{customer.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardPoints;
