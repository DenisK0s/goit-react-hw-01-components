// модули
import PropTypes from 'prop-types';

// стили
import styles from './ProfileDescription.module.css';

// иконка
import defaultIcon from '../../components/default-profile-picture1.jpg';


const ProfileDescription = ({ userName, tag, location, avatar }) => {
  return <div className={styles.Description}>
    <div className={styles.DescriptionInner}>
      <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.Avatar}
    />
    </div> 
    <p className={styles.Name}>{ userName }</p>
    <p className={styles.Tag}>@ { tag }</p>
    <p className={styles.Location}>{ location }</p>
  </div>
};

ProfileDescription.defaultProps = {
  avatar: defaultIcon
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileDescription;