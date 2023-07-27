import {myLocalStorageReducer} from "../myLocalStorage-reducer";
import {counterReducer} from "../counter-reducer";
import {combineReducers, createStore} from "redux";

export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    myLocalStorage: myLocalStorageReducer,
    myStorage: counterReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store