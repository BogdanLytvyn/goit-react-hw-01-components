import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './transanctionListItem/TransactionItem';
import styles from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transictionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
