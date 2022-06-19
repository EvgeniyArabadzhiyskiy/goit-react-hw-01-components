import stl from './Profile.module.css';
import PropTypes from "prop-types";

const Profile = ({ userData }) => {
  const {
    username,
    avatar,
    location,
    stats: { followers, likes, views },
    tag,
  } = userData;

  return (
    <div className={stl.profile__container}>
      <div className={stl.profile}>
        <div className={stl.description}>
          <img className={stl.avatar} src={avatar} alt={username} />
          <p className={stl.name}>{username}</p>
          <p className={stl.tag}>{tag}</p>
          <p className={stl.location}>{location}</p>
        </div>

        <ul className={stl.stats}>
          <li className={stl.item__stats}>
            <span className={stl.label}>Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={stl.item__stats}>
            <span className={stl.label}>Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={stl.item__stats}>
            <span className={stl.label}>Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
    userData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
        }),
    }),

    
}

export default Profile;
