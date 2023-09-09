

function Education(props) {

    return (

        <div>
            <p className="edu">{props.heading}</p>
            <p>{props.company}</p>
            <p>{props.activity}</p>
            <p className="date">{props.start}</p>
            <p className="date">{props.end}</p>
             
        </div>
    );
};
export default Education;