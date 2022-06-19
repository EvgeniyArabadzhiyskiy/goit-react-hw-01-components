import user from './user.json'

import Profile from './components/Profile/Profile';
import Container from 'components/Container/Container';

const App = () => {
  
  return (
    <div>
      <Container>
      <Profile userData={user} />
      </Container>
      
    </div>
  );
};

export default App;
