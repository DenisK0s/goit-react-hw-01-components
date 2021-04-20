// модули
import PropTypes from 'prop-types';

//компоненты
import FriendListItem from '../FriendList/FriendListItem/FriendListItem';
import Container from '../Container/Container';

// стили
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const ulClasses = [styles.FriendList, 'List'].join(' ');
  return (
    <Container>
      <ul className={ulClasses}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatarUrl={avatar}
            name={name}
            status={isOnline}
            id={id}
          />
        ))}
      </ul>
    </Container>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
