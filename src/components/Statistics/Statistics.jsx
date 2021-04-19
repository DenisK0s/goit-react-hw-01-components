//модули
import PropTypes from 'prop-types';

//компоненты
import Container from '../Container/Container';
import StatisticsListItem from '../StatisticsListItem/StatisticsListItem';

//Стили
import styles from './Statistics.module.css';

const Statistics = ({ title, data }) => {
  const ulClasses = [styles.StatList, "List"].join(' ');
  return <Container>
      <section className={styles.Statistics}>
        <h2 className={styles.Title}>{ title }</h2>

        {title && (<ul className={ulClasses}>
        {data.map(({ id, label, percentage }) => (<StatisticsListItem
            id={id}
            label={label}
            percentage={percentage}
          />))}
        </ul>)}
      </section>
  </Container> 
}

Statistics.defaultProps = {
  title: '',
  data: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Statistics;