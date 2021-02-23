import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Friends.module.css';

export default function FrendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className="status" type={isOnline}></span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FrendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};
