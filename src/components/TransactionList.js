import React from 'react';
import '../styles/TransactionList.css';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
          <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerId}</td>
              <td>{transaction.name}</td>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
