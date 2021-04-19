// модули
import PropTypes from 'prop-types';

// компоненты
import Container from '../Container/Container';
import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileStatsList from '../ProfileStatsList/ProfileStatsList';

// стили
import styles from './Profile.module.css';

const Profile = ({ userProfile }) => {
  const { name, tag, location, avatar, stats } = userProfile;
  return <Container>
    <div className={styles.Profile}>
      < ProfileDescription
        userName={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStatsList  tag={tag} stats={stats} />
    </div>
  </Container>
};


Profile.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default Profile;