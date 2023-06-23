import React, {useEffect, useState} from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="App">
            <div className="App-wrapper">
                <Incrementer num={counter} setNum={setCounter}/>
            </div>
        </div>
    );
}

export default App;
