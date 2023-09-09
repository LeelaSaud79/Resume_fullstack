function Reference(props){
    return(
        <div>
            <p className="heading">{props.heading}</p>
            <p className="date">{props.activity}</p>
            <p>{props.describe}</p>
            <p>{props.link}</p>

        </div>

    );

}
export default Reference;