function Benefits(props) {
  return (
    <div>
      <img className="benefits_img" src={props.benefits_img} />
      <h2 className="benefits_title">{props.benefits_title}</h2>
      <p className="benefits_txt">{props.benefits_text}</p>
    </div>
  );
}

export default Benefits;
