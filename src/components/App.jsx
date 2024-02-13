import './App.css'

import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import Profile from './profile/Profile';
import FriendList from './friend_list/FriendList';
import TransactionHistory from './transaction_history/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
