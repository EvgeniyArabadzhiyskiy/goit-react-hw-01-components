import PropTypes from 'prop-types';

import stl from './FriendListItem.module.css';
import classNames from 'classnames';

const FriendListItem = ({ avatar, friendName, isOnline }) => {
  return (
    <li className={stl.item}>
      <p className={classNames(stl.status, { [stl.status__activ]: isOnline })}>
        <span className={stl.text__status}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </p>
      <img className={stl.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={stl.name}>{friendName}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
