import React from 'react';
import PropTypes from 'prop-types';
import FrendsListItem from './frendsListItem/FrendsListItem';
import styles from './Friends.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <FrendsListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
