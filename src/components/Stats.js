function Stats(props) {
  return (
    <div className="stat_section">
      <img className="stat_icon" src={props.stat_icon} />
      <p className="stat_num">{props.stat_num}</p>
      <p className="stat_txt">{props.stat_text}</p>
    </div>
  );
}

export default Stats;
