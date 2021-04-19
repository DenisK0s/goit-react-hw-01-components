// модули
import PropTypes from 'prop-types';

// стили
import styles from './TransactionTableRow.module.css';
      
const TransactionTableRow = ({ id, type, amount, currency }) => {
  return <tr key={id}>
    <td className={styles.TransactionTableRow}>{type}</td>
    <td className={styles.TransactionTableRow}>{amount}</td>
    <td className={styles.TransactionTableRow}>{currency}</td>
  </tr>
};


TransactionTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionTableRow;