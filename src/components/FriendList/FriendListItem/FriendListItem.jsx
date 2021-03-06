// модули
import PropTypes from 'prop-types';

// стили
import styles from './FriendListItem.module.css';

//иконка
import defaultIcon from '../../../images/icons/default-profile-picture1.jpg';

const FriendListItem = ({ avatarUrl, name, status }) => {
  const friendIsOnLine = [styles.Status, styles.OnLine].join(' ');
  const friendIsOffLine = [styles.Status, styles.OffLine].join(' ');
  return (
    <li className={styles.Item}>
      {status ? (
        <span className={friendIsOnLine}></span>
      ) : (
        <span className={friendIsOffLine}></span>
      )}
      <div className={styles.ImgInner}>
        <img className={styles.Avatar} src={avatarUrl} alt={name} width="48" />
      </div>
      <p className={styles.Name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatarUrl: defaultIcon,
};

FriendListItem.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
};

export default FriendListItem;
