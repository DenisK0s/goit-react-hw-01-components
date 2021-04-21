// модули

// компоненты
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransitionHistory from './components/TransactionHistory/TransitionHistory';

// данные
import user from './store/user.json';
import friends from './store/friends.json';
import transactions from './store/transactions.json';
import statisticalData from './store/statistical-data.json';

const App = () => {
  return (
    <div>
      <Profile userProfile={user} />,
      <FriendList friends={friends} />
      <Statistics title="Upload stats" data={statisticalData} />
      <TransitionHistory items={transactions} />
    </div>
  );
};

export default App;
