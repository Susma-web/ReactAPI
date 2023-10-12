import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinbaseCurrenciesTable = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coinbase.com/v2/currencies');
        setCurrencies(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='img'>
      <h1 className='top-header'>Coinbase Currencies</h1>
      <table className='center header'>
        <thead className='color'>
          <tr className='color'>
            <th className='table-header'>Currency ID</th>
            <th className='table-header'>Name</th>
            <th className='table-header'>Min Size</th>
          </tr>
        </thead>
        <tbody className='color'>
          {currencies.map(currency => (
            <tr key={currency.id}>
              <td>{currency.id}</td>
              <td>{currency.name}</td>
              <td>{currency.min_size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinbaseCurrenciesTable;