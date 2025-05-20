import React from 'react';
import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';

import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import { useSelector } from 'react-redux';

function App() {
  const fullName = useSelector(store => store.customer.fullName);
  return (
    <div>
      <h1>
        <span role="img" aria-label="logo">
          🏦
        </span>{' '}
        The React-Redux Bank
        <span role="img" aria-label="logo">
          ⚛️
        </span>
      </h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
