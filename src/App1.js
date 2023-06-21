import { useState } from "react";
import Task from "./Task";

function App1() {

    const [toDoList, setToDoList] = useState([]);

    const [inputText, setInputText] = useState("");

    const fetchInputText = (event) => {
        setInputText(event.target.value);
    }

    const updateToDoList = () => {

        var obj = {
            id: toDoList.length === 0 ? 1 : toDoList.length + 1,
            name: inputText,
            completed: false
        }

        setToDoList([...toDoList, obj]);
    }

    const deleteFromToDoList = (id) => {
        var idToDelete = id;
        setToDoList(toDoList.filter((task) => task.id !== idToDelete));
    }

    const markTaskCompleted = (id) => {

        // setToDoList(toDoList.map((task) => {
        //     if (task.id === id) {
        //         return ({ ...task, completed: true });
        //     }
        //     else {
        //         return task;
        //     }
        // }
        // ));
        console.log("Uncomment above lines")
    }


    return (
        <div>
            <input type="text" onChange={fetchInputText} />
            <button onClick={updateToDoList}>Add</button>

            {toDoList.map((task) => {
                return
                <Task id={task.id} name={task.name}
                    deleteTask={deleteFromToDoList}
                    markTaskAsCompleted={markTaskCompleted} completed={task.completed} />

            })}

        </div>
    );
}

export default App1;