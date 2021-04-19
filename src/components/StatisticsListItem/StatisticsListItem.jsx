// модули
import PropTypes from 'prop-types';

// стили
import styles from './StatisticsListItem.module.css';
      
const StatisticsListItem = ({ id, label, percentage }) => {
  return <li className={styles.Item} key={id}>
    <span className={styles.Label}>{label}</span>
    <span className={styles.Percentage}>{percentage}%</span>
  </li>
};


StatisticsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number
};

export default StatisticsListItem;