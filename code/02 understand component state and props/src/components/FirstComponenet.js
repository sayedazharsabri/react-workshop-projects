

function FirstComponenet(props) {

    return <div className="modal">
        <h1>{props.owner} Application</h1>
        <p>Its application - {props.reason}</p>
        <button onClick={props.closeModal}>Close</button>
    </div>
}

export default FirstComponenet;