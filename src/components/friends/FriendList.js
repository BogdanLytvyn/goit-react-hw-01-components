import React from 'react';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status"></span>
          <img className="avatar" src={friend.avatar} alt="avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
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
