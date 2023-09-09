function Certification(props) {
  return (
    <div className="training">
      <p className="heading">{props.heading}</p>
      <p>{props.position}</p>
      <p>{props.company}</p>
      {props.end && (
        <p>
          <i className="far fa-envelope"></i>{" "}
          <a href={`mailto:${props.end}`}>{props.end}</a>
        </p>
      )}
      {props.activity && (
        <p>
          <i className="fas fa-phone"></i>{" "}
          <a href={`tel:${props.activity}`}>{props.activity}</a>
        </p>
      )}
    </div>
  );
}
export default Certification;
