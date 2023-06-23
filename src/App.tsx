import React, {useEffect, useState} from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";
import Setter from "./components/Setter/Setter";

function App() {
    const [counter, setCounter] = useState(0)
    const [maxCounter, setMaxCounter] = useState(1);
    const [minCounter, setMinCounter] = useState(0);

    const [errorMessageActivator, setErrorMessageActivator] = useState(false)


    return (
        <div className="App">
            <div className="App-wrapper">
                <Setter setMinCounter={setMinCounter} setMaxCounter={setMaxCounter}
                        setErrorMessageActivator={setErrorMessageActivator} 
                        />
                <Incrementer num={counter} setNum={setCounter}
                             maxCounter={maxCounter} minCounter={minCounter}
                             errorMessageActivator={errorMessageActivator}/>
            </div>
        </div>
    );
}

export default App;
