// модули
import PropTypes from 'prop-types';

// стили
import styles from './TransactionTableRow.module.css';

const TransactionTableRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.TransactionTableRow}>{type}</td>
      <td className={styles.TransactionTableRow}>{amount}</td>
      <td className={styles.TransactionTableRow}>{currency}</td>
    </tr>
  );
};

TransactionTableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionTableRow;
