
function Task(props) {

    return (
        <div>
            <div style={{ backgroundColor: props.completed ? "green" : "white" }}>{props.name}</div>
            <div><button onClick={() => props.deleteTask(props.id)}>Delete</button></div>
            <div><button onClick={() => props.markTaskAsCompleted(props.id)}>Mark it completed</button></div>
        </div>
    );

}

export default Task;