type SetMinMaxToLocalStorageAT = ReturnType<typeof setMinMaxToLocalStorageAC>

export type SetterReducerActionsType = SetMinMaxToLocalStorageAT

const initialState: MyLStorageType = {
    _minCounterLS: 0,
    _maxCounterLS: 0
}

export type MyLStorageType = {
    _minCounterLS: number,
    _maxCounterLS: number
}

export const myLocalStorageReducer = (state: MyLStorageType = initialState , action: SetterReducerActionsType) => {
    switch (action.type) {
        case "SET-MIN-MAX-VALUE":
            return {...state, _minCounterLS: action._minCounter, _maxCounterLS: action._maxCounter}
        default:
            return state
    }
}

export const setMinMaxToLocalStorageAC = (_minCounter: number, _maxCounter: number) => ({
    type: "SET-MIN-MAX-VALUE", _minCounter, _maxCounter} as const)