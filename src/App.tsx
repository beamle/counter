import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";
import Setter from "./components/Setter/Setter";
import {setterReducer} from "./components/Setter/setter-reducer";
import {counterReducer} from "./counter-reducer";
import {TabloMessagesType} from "./components/Incrementer/Tablo/tablo-messages/tablo-messages";
// import {counterReducer} from "./counter-reducer";


export type MyLStorageType = {
    _minCounterLS: number,
    _maxCounterLS: number
}

export type MyStorageType = {
    counter: number,
    maxCounter: number,
    minCounter: number
    tabloMessage: TabloMessagesType
}

function App() {
    const [tabloMessage, setTabloMessage] = useState('');

    const [ myLocalStorage, dispatchToLocalStorage] = useReducer(setterReducer, {
        _minCounterLS: 0,
        _maxCounterLS: 0
    })

    const [ myStorage, dispatchToMyStorage ] = useReducer(counterReducer, {
        counter: 0,
        maxCounter: 5,
        minCounter: 0,
        tabloMessage: ''
    })

    console.log(myLocalStorage)

    // const myLocalStorage: MyLocalStorageType = {
    //     _minCounterLS: 0,
    //     _maxCounterLS: 0,
    //     setMaxCounter(value: number) {
    //         // debugger
    //         this._maxCounterLS = value
    //         console.log(this._maxCounterLS, 'here max')
    //     },
    //     setMinCounter(value: number) {
    //         this._minCounterLS = value
    //         console.log(this._minCounterLS, 'here min')
    //     },
    //     getMaxCounter() {
    //         console.log(myLocalStorage._minCounterLS, 'inlocalstorage')
    //         return this._minCounterLS
    //     },
    //     getMinCounter() {
    //         return this._maxCounterLS
    //     }
    // }

    const handleBtnDisabled = () => {
        // Check if min/maxCounter in myLocalStorage is changed -> disable btn if did
        // At the same time Setter changes tabloMessage to "Please click Set"
        let isDisabled = false;
        if (myStorage.maxCounter !== Number(myLocalStorage._maxCounterLS)) {
            return !isDisabled
        } else if (myStorage.minCounter !== Number(myLocalStorage._minCounterLS)) {
            return !isDisabled
        }
        return isDisabled
    }

    return (
        <div className="App">
            <div className="App-wrapper">
                <Setter maxCounter={myStorage.maxCounter} minCounter={myStorage.minCounter}
                        setTabloMessage={setTabloMessage}
                        dispatchToLocalStorage={dispatchToLocalStorage}
                        myLocalStorage={myLocalStorage}
                        dispatchToMyStorage={dispatchToMyStorage}
                />
                <Incrementer counter={myStorage.counter}
                             maxCounter={myStorage.maxCounter} minCounter={myStorage.minCounter}
                             handleBtnDisabled={handleBtnDisabled}
                             tabloMessage={tabloMessage}
                             setTabloMessage={setTabloMessage}
                             dispatchToMyStorage={dispatchToMyStorage}
                />
            </div>
        </div>
    );
}

export default App;
