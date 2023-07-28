import React from 'react';
import './App.css';
import Incrementer from "./components/Incrementer/Incrementer";
import Setter from "./components/Setter/Setter";
import {TabloMessagesType} from "./components/Incrementer/Tablo/tablo-messages/tablo-messages";



function App() {

    return (
        <div className="App">z
            <div className="App-wrapper">
                <Setter/>
                <Incrementer/>
            </div>
        </div>
    );
}


export default App;
