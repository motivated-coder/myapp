import { useEffect, useState } from "react";
function App3() {

    const [displayText, setDisplayText] = useState("Sumeet")

    const skd = () => {
        console.log("mounted");
        setDisplayText("Dwivedi")
    }

    useEffect(() => {
        console.log("mounting")
        return (console.log("Unmounting"));
    }, [displayText]);


    return (
        <div>
            <h1>{displayText}</h1>
            <button onClick={skd}>Click</button>
        </div>
    );
}

export default App3;