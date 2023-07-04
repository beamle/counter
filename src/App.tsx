import React, {useState} from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";
import Setter from "./components/Setter/Setter";
import {Route, Routes} from "react-router-dom";

function App() {
    const [counter, setCounter] = useState<number | null>(null)
    const [maxCounter, setMaxCounter] = useState(5);
    const [minCounter, setMinCounter] = useState(0);

    return (
        <div className="App">
            <div className="App-wrapper">
                <Routes>
                    <Route path={'/settings'} element={<Setter maxCounter={maxCounter} minCounter={minCounter}
                                                               setMaxCounter={setMaxCounter}
                                                               setMinCounter={setMinCounter}
                                                               setCounter={setCounter}
                    />}></Route>
                    <Route path={'/'} element={<Incrementer counter={counter} setCounter={setCounter}
                                                            maxCounter={maxCounter} minCounter={minCounter}
                    />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
