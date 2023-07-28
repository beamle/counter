import {TabloMessagesType} from "./components/Incrementer/Tablo/tablo-messages/tablo-messages";

type ChangeMaxCounterAT = ReturnType<typeof changeMaxCounterAC>
type ChangeMinCounterAT = ReturnType<typeof changeMinCounterAC>
type ChangeCounterAT = ReturnType<typeof changeCounterAC>
type ChangeMessageAT = ReturnType<typeof changeMessageAC>

export type CounterReducerActionsType =
    ChangeMaxCounterAT |
    ChangeMinCounterAT |
    ChangeCounterAT |
    ChangeMessageAT


export type MyStorageType = {
    counter: number,
    maxCounter: number,
    minCounter: number
    tabloMessage: TabloMessagesType
}

const initialState: MyStorageType = {
    counter: 0,
    maxCounter: 5,
    minCounter: 0,
    tabloMessage: ''
}

export const counterReducer = (state: MyStorageType = initialState, action: CounterReducerActionsType): MyStorageType => {
    switch (action.type) {
        case "CHANGE-COUNTER":
            return {...state, counter: action.counter}
        case "CHANGE-MAXCOUNTER":
            return {...state, maxCounter: action.maxCounter}
        case "CHANGE-MINCOUNTER":
            return {...state, minCounter: action.minCounter}
        case "CHANGE-MESSAGE":
            return {...state, tabloMessage: action.tabloMessage}
        default:
            return state
    }
}

export const changeMaxCounterAC = (maxCounter: number) => ({type: "CHANGE-MAXCOUNTER", maxCounter} as const)
export const changeMinCounterAC = (minCounter: number) => ({type: "CHANGE-MINCOUNTER", minCounter} as const)
export const changeCounterAC = (counter: number) => ({type: "CHANGE-COUNTER", counter} as const)
export const changeMessageAC = (tabloMessage: TabloMessagesType) => ({type: "CHANGE-MESSAGE", tabloMessage} as const)