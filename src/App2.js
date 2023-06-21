import { useState, useEffect } from "react";

function App2() {

    const [inputText, setInputText] = useState("");

    const updateText = (event) => {

        setInputText(event.target.value);
    }

    useEffect(() => {
        console.log("Component mounted");

        return (console.log("Component unmounted"));
    }, []);

    return (
        <div>
            <input type="text" onChange={updateText} />
            <h1>My name is {inputText}</h1>
        </div>
    );
}

export default App2;