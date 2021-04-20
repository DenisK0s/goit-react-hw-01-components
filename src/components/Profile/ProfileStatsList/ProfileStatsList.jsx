// модули
import PropTypes from 'prop-types';

// стили
import styles from './ProfileStatsList.module.css';

const ProfileStatsList = ({ stats }) => {
  const { followers, views, likes } = stats;
  const ulClasses = [styles.StatsList, 'List'].join(' ');

  return (
    <ul className={ulClasses}>
      <li className={styles.StatsListItem} key={followers}>
        <span className={styles.Label}>Followers</span>
        <span className={styles.Quantity}>{followers}</span>
      </li>
      <li className={styles.StatsListItem} key={views}>
        <span className={styles.Label}>Views</span>
        <span className={styles.Quantity}>{views}</span>
      </li>
      <li className={styles.StatsListItem} key={likes}>
        <span className={styles.Label}>Likes</span>
        <span className={styles.Quantity}>{likes}</span>
      </li>
    </ul>
  );
};

ProfileStatsList.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default ProfileStatsList;
