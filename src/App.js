import user from './Data/user.json';
import data from './Data/data.json';
import friends from "./Data/friends.json";

import Profile from './components/Profile/Profile';
import Container from 'components/Container/Container';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

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

        <Statistics title="Upload stats" stats={data}/>
        <Statistics  stats={data}/>

        <FriendList allFriends={friends} />



      </Container>
    </div>
  );
};

export default App;
