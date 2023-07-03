import React, {useState} from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";
import Setter from "./components/Setter/Setter";
import {Route, Routes} from "react-router-dom";

function App() {
    const [counter, setCounter] = useState<number | null>(null)
    const [maxCounter, setMaxCounter] = useState(5);
    const [minCounter, setMinCounter] = useState(0);
    const [tabloMessage, setTabloMessage] = useState('');


    const handleBtnDisabled = () => {
        let maxCounterLs = JSON.parse(localStorage.getItem('maxCounter') as string)
        let minCounterLs = JSON.parse(localStorage.getItem('minCounter') as string)
        let isDisabled = false;
        if (maxCounter !== Number(maxCounterLs)) {
            console.log(!isDisabled,'max')
            return !isDisabled
        }
        else if (minCounter !== Number(minCounterLs)) {
            console.log(!isDisabled,'min')
            return !isDisabled
        }
        return isDisabled
    }

    return (
        <div className="App">
            <div className="App-wrapper">
                <Routes>
                    <Route path={'/settings'} element={<Setter maxCounter={maxCounter} minCounter={minCounter}
                                                       setMaxCounter={setMaxCounter} setMinCounter={setMinCounter} setCounter={setCounter}
                                                       setTabloMessage={setTabloMessage}
                    />} ></Route>
                    <Route path={'/'} element={<Incrementer counter={counter} setCounter={setCounter}
                                                            maxCounter={maxCounter} minCounter={minCounter}
                                                            handleBtnDisabled={handleBtnDisabled}
                                                            tabloMessage={tabloMessage}
                                                            setTabloMessage={setTabloMessage}
                    />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

// kogda Input menjatetsja: - Please click set -> kogda my menjaem, no eto zna4enie validnoe
        //                  - Incorrect valu8e -> kogda nizhnie knoipki disabled ot zna4enij v Inpute