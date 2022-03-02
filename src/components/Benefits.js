function Benefits(props) {
  return (
    <div className="benefits_container">
      <img className="benefits_img" src={props.benefits_img} />
      <div className="benefits_description">
        <h2 className="benefits_title">{props.benefits_title}</h2>
        <p className="benefits_txt">{props.benefits_text}</p>
      </div>
    </div>
  );
}

export default Benefits;
