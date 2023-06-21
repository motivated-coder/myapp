import { useState } from "react";
import Axios from "axios";

function App5() {

    const [name, setName] = useState("");
    const [predicted, setPredicted] = useState(null);

    const updateName = (event) => {
        setName(event.target.value);
    }

    const getAgeByName = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                setPredicted(res.data);
            });
    };

    return (
        <div>
            <input type="text" onChange={updateName} />
            <button onClick={getAgeByName}>Predict Age</button>
            <p> Name : {predicted?.name}</p>
            <p>Predicted Age : {predicted?.age}</p>
        </div>
    );
}
export default App5;