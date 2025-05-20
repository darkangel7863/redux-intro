import React from 'react';

import { useSelector } from 'react-redux';

function Customer() {
  const customer = useSelector(store => store.customer.fullName);
  return (
    <h2>
      <span role="img" aria-label="emoji">
        👋
      </span>
      Welcome, {customer}
    </h2>
  );
}

export default Customer;
