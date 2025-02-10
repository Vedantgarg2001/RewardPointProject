import React, { useEffect, useState } from 'react';
import { transactionsData } from '../data/transactionsData';
import TransactionList from './TransactionList';
import RewardPoints from './RewardPoints';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setTransactions(transactionsData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TransactionList transactions={transactions} />
          <RewardPoints transactions={transactions} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
