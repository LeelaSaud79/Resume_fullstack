function Project(props){
    return(
        <div className="project">
            <p className="heading">{props.heading}</p>
            <p>{props.activity}</p>
            <p>{props.describe}</p>
            <p>{props.site}</p>
        </div>
    );
}
export default Project;