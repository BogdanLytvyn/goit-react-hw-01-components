import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistic.module.css';

export default function StatisticsItem({ label, percentage }) {
  return (
    <li className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage} </span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
