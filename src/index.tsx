import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createTheme, colors} from '@mui/material';
import {combineReducers, createStore} from "redux";
import {myLocalStorageReducer} from "./myLocalStorage-reducer";
import incrementer from "./components/Incrementer/Incrementer";
import {counterReducer} from "./counter-reducer";
import {Provider} from 'react-redux';
import {store} from "./store/store";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.teal[300],
        },
        secondary: {
            main: '#FF2SFS'
        }
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
);

