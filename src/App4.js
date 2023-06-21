import Axios from "axios";
import { useEffect, useState } from "react";

function App4() {

    const [fact, setFact] = useState("");

    useEffect(() => {
        updateFact();
    }, []);


    const updateFact = () => {
        Axios.get("https://catfact.ninja/fact")
            .then((res) => {
                setFact(res.data.fact);
            });
    }

    return (
        <div>
            <button onClick={updateFact}>Generate Cat Fact</button>
            <p>{fact}</p>
        </div>
    );
}

export default App4;