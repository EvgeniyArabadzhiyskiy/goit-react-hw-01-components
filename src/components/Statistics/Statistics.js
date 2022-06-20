import stl from './Statistics.module.css'
import PropTypes  from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={stl.statistics}>
        {title && <h2 className={stl.title}>{title}</h2>}

        <ul className={stl.stat__list}>
          {stats.map(({ id, label, percentage }) => (
            <li className={stl.item} key={id}>
              <span className={stl.label}>{label}</span>
              <span className={stl.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),),
}

export default Statistics;


