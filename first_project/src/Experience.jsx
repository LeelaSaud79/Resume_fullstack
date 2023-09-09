
function Experience(props) {
        // console.log('Experience Props:', props);

    return (
        <div>
            <p className="heading">{props.heading}</p>
            <p>{props.position}</p>
            <p className="date">{props.start}</p>
            <p className="date">{props.end}</p>
            <p className="tech">Tech Used: </p>
            <p>{props.activity}</p>
        </div>
    );
}
export default Experience;