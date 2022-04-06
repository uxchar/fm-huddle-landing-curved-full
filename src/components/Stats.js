function Stats(props) {
  return (
    <div className="stat_component">
      <img
        className="stat_icon"
        src={props.stat_icon}
        alt="communication image"
      />
      <p className="stat_num">
        <b>{props.stat_num}</b>
      </p>
      <p className="stat_txt">{props.stat_text}</p>
    </div>
  );
}

export default Stats;
