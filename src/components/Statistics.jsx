const Statistics = ({ title, stats }) => {
  const markupListItem = stats =>
    stats.map(({ lable, percentage }) => (
      <li className="item">
        <span className="label">{lable}</span>
        <span className="percentage">{percentage}</span>
      </li>
    ));
  return (
    <section className="statistics">
      {{ title } && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{markupListItem(stats)}</ul>
    </section>
  );
};
export default Statistics;
