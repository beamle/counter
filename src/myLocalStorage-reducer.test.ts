import {myLocalStorageReducer} from "./myLocalStorage-reducer";

test("myLocalStorage min/max counters should be changed", () => {

    const initialState = {
        _minCounterLS: 0,
        _maxCounterLS: 0
    }
    let endState = myLocalStorageReducer(initialState, {type: "SET-MIN-MAX-VALUE", _minCounter: 10, _maxCounter: 25})

    expect(endState._maxCounterLS).toBe(25)
    expect(endState._minCounterLS).toBe(10)
})
