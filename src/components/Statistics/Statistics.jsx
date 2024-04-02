import statisticsStyle from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  // const markupListItem = stats =>
  //   stats.map(({ id, label, percentage }) => (
  //     <li className="item" key={id}>
  //       <span className="label">{label}</span>
  //       <span className="percentage">{percentage}</span>
  //     </li>
  //   ));

  const getRandomHexColor = function () {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  return (
    <section className={statisticsStyle.statistics}>
      {title && <h2 className={statisticsStyle.title}>{title}</h2>}
      <ul className={statisticsStyle['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              style={{ backgroundColor: getRandomHexColor() }}
              className={statisticsStyle.item}
              key={id}
            >
              <span className={statisticsStyle.label}>{label}</span>
              <span className={statisticsStyle.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
