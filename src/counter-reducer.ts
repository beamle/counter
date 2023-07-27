import {MyStorageType} from "./App";

type ChangeMaxCounterAT = ReturnType<typeof changeMaxCounterAC>
type ChangeMinCounterAT = ReturnType<typeof changeMinCounterAC>
type ChangeCounterAT = ReturnType<typeof changeCounterAC>
export type CounterReducerActionsType = ChangeMaxCounterAT | ChangeMinCounterAT | ChangeCounterAT

export const counterReducer = (state: MyStorageType, action: CounterReducerActionsType) => {
    switch (action.type) {
        case "CHANGE-COUNTER":
            return {...state, counter: action.counter}
        case "CHANGE-MAXCOUNTER":
            return {...state, maxCounter: action.maxCounter}
        case "CHANGE-MINCOUNTER":
            return {...state, minCounter: action.minCounter}
        default:
            return state
    }
}

export const changeMaxCounterAC = (maxCounter: number) => ({type: "CHANGE-MAXCOUNTER", maxCounter} as const)
export const changeMinCounterAC = (minCounter: number) => ({type: "CHANGE-MINCOUNTER", minCounter} as const)
export const changeCounterAC = (counter: number) => ({type: "CHANGE-COUNTER", counter} as const)