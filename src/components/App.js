import React from 'react';
import Profile from './profile/Profile';
import Statistics from './statistic/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import data from '../data/data';

const App = () => {
  return (
    <div>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />

      <Statistics title="Upload stats" stats={data.statisticalData} />

      <FriendList friends={data.friends} />

      <TransactionHistory items={data.transactions} />
    </div>
  );
};

export default App;
