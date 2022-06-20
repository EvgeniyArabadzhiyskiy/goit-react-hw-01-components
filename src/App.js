import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

import Container from 'components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Container>
        <Profile
          username={user.username}
          avatar={user.avatar}
          location={user.location}
          tag={user.tag}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

        <FriendList allFriends={friends} />

        <TransactionHistory transactions={transactions} />
      </Container>
    </div>
  );
};

export default App;
