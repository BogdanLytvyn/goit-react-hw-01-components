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
  friends: PropTypes.array,
};

//   {
//     "avatar": "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },
