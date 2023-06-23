import React, {useEffect, useState} from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";
import Setter from "./components/Setter/Setter";

function App() {
    const [num, setNum] = useState<number>(0)

    const [maxSetter, setMaxSetter] = useState<number>(5)
    const [minSetter, setMinSetter] = useState<number>(0)
    const [setter, setSetter] = useState<boolean>(false)
    // na etom urovne nuzhno proveritj num === maxSetter / minSetter ,
    // chtoby
    const handleNum = () => setNum(minSetter) // mozhno prosto Setnum prokinutjk v setter v mesto etogo
    const handleSetter = () => setSetter(true)
    return (
        <div className="App">
            <div className="App-wrapper">
                <Setter num={num}
                        setMaxSetter={setMaxSetter} setMinSetter={setMinSetter}
                        maxSetter={maxSetter} minSetter={minSetter} handleNum={handleNum}/>
                <Incrementer setter={setter} num={num} setNum={setNum} minSetter={minSetter} maxSetter={maxSetter}/>
            </div>
        </div>
    );
}

export default App;
