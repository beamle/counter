import { render, fireEvent } from '@testing-library/react';
import {useState} from "react";
import {MyLStorageType} from "../../App";
import {setterReducer} from "./setter-reducer";

test("myLocalStorage min/max counters should be changed", () => {

    const initialState = {
        _minCounterLS: 0,
        _maxCounterLS: 0
    }
    let endState = setterReducer(initialState, {type: "SET-MIN-MAX-VALUE", _minCounter: 10, _maxCounter: 25})

    expect(endState._maxCounterLS).toBe(25)
    expect(endState._minCounterLS).toBe(10)
})
