import {useReducer} from "react";
import {changeCounterAC, changeMaxCounterAC, changeMinCounterAC, counterReducer} from "./counter-reducer";
import {TabloMessagesType} from "./components/Incrementer/Tablo/tablo-messages/tablo-messages";

test("maxCounter should be changed", () => {
    const startState = {
        counter: 0,
        maxCounter: 5,
        minCounter: 1,
        tabloMessage: '' as TabloMessagesType
    }

    let endState = counterReducer(startState, changeMaxCounterAC(10))
    expect(endState.counter).toBe(0)
    expect(endState.maxCounter).toBe(10)
    expect(endState.minCounter).toBe(1)
})

test("minCounter should be changed", () => {
    const startState = {
        counter: 0,
        maxCounter: 5,
        minCounter: 1,
        tabloMessage: '' as TabloMessagesType
    }

    let endState = counterReducer(startState, changeMinCounterAC(7))

    expect(endState.minCounter).toBe(7)
    expect(endState.maxCounter).toBe(5)
    expect(endState.counter).toBe(0)
})

test("counter should be changed", () => {
    const startState = {
        counter: 0,
        maxCounter: 5,
        minCounter: 1,
        tabloMessage: '' as TabloMessagesType
    }

    let endState = counterReducer(startState, changeCounterAC(99))

    expect(endState.counter).toBe(99)
    expect(endState.maxCounter).toBe(5)
    expect(endState.minCounter).toBe(1)
})