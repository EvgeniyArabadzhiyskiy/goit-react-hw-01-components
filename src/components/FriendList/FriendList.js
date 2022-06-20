import PropTypes from 'prop-types';
import stl from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ allFriends }) => {
  return (
    <div className={stl.section__friend} >
      <ul className={stl.friend__list}>
        {allFriends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              friendName={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
    allFriends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),),
}

export default FriendList;
