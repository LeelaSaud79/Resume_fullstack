function Contact(props) {
  return (
    <div className="college">
      
      <p className="name">{props.name}</p>
      <p className="designation">{props.designation}</p>
      <br />
      {props.address && (
        <p>
          <i className="fas fa-map-marker-alt"></i> {props.address}
        </p>
      )}
      {props.email && (
        <p>
          <i className="far fa-envelope"></i> <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
      )}
      {props.phone && (
        <p>
          <i className="fas fa-phone"></i> <a href={`tel:${props.phone}`}>{props.phone}</a>
        </p>
      )}
      {props.link && (
        <p>
          <i className="fab fa-linkedin"></i> <a href={props.link}>LinkedIn</a>
        </p>
      )}
      {props.github && (
        <p>
          <i className="fab fa-github"></i> <a href={props.github}>GitHub</a>
          
        </p>
      )}
      <br />
      <h3>Summary</h3>
      <hr />
      <p className="summary">{props.summary}</p>
    </div>
  );
}

export default Contact;
