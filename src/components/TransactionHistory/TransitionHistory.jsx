// модули
import PropTypes from 'prop-types';

// компоненты
import Container from '../Container/Container';
import TransactionTableRow from '../TransactionTableRow/TransactionTableRow';

// стили
import styles from './TransitionHistory.module.css';

const TransitionHistory = ({items}) => {
  return <Container>
    <table className={styles.TransactionHistory}>
      <thead className={styles.TableHeadRow}>
        <tr>
          <th className={styles.TableHead}>Type</th>
          <th className={styles.TableHead}>Amount</th>
          <th className={styles.TableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => <TransactionTableRow
          id={id}
          type={type}
          amount={amount}
          currency={currency}
        />)}
      </tbody>
    </table>
  </Container>
}

TransitionHistory.defaultProps = {
  items: [],
};

TransitionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransitionHistory;