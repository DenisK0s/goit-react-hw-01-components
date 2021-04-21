// модули
import PropTypes from 'prop-types';

// стили
import styles from './StatisticsListItem.module.css';

const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li className={styles.Item}>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsListItem;
