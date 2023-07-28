import React, {ChangeEvent, FC, useCallback, useEffect} from 'react';
import s from "./Setter.module.css";
import SuperButton from "../Button/SuperButton";
import MyInput, {ClassNameValues} from "../Input/MyInput";
import {
    changeCounterAC,
    changeMaxCounterAC,
    changeMessageAC,
    changeMinCounterAC,
    MyStorageType,
} from "../../counter-reducer";
import {MyLStorageType, setMinMaxToLocalStorageAC} from "../../myLocalStorage-reducer";
import {EMPTY, PLEASE_CLICK_SET} from "../Incrementer/Tablo/tablo-messages/tablo-messages";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import MyInputMemoized from "../Input/MyInput";
import SuperButtonMemoized from "../Button/SuperButton";

const Setter: FC = () => {
    const dispatch = useDispatch();
    const myLocalStorage = useSelector<AppRootState, MyLStorageType>(state => state.myLocalStorage)
    const {_minCounterLS, _maxCounterLS} = myLocalStorage;
    const myStorage = useSelector<AppRootState, MyStorageType>(state => state.myStorage)
    const {maxCounter, minCounter} = myStorage

    const handleMaxAndMinCounter = useCallback(() => {
        // SET btn sets new max/min values to myLocalStorage
        dispatch(setMinMaxToLocalStorageAC(minCounter, maxCounter));
        dispatch(changeCounterAC(minCounter))
        dispatch(changeMessageAC(EMPTY))
    },[])

    const handleMaxCounterSetter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxCounterAC(parseInt(e.currentTarget.value)))
    },[])

    const handleMinCounterSetter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinCounterAC(parseInt(e.currentTarget.value)))
    }, [])

    useEffect(() => {
        if (_maxCounterLS !== maxCounter) {
            dispatch(changeMessageAC(PLEASE_CLICK_SET))
        } else if (_minCounterLS !== minCounter) {
            dispatch(changeMessageAC(PLEASE_CLICK_SET))
        } else dispatch(changeMessageAC(EMPTY))
    }, [maxCounter, minCounter])

    const isDisabled = minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || maxCounter === minCounter

    /* Styles */
    let className: keyof ClassNameValues = isDisabled ? 'error' : 'default';


    return (
        <div className={s.setter}>
            <div className={s.setterInputs}>
                <MyInputMemoized value={maxCounter} callback={handleMaxCounterSetter} name={'Max'} className={className}/>
                <MyInputMemoized value={minCounter} callback={handleMinCounterSetter} name={'Min'} className={className}/>
            </div>
            <div className={s.setterButton}>
                <SuperButtonMemoized callback={handleMaxAndMinCounter} disabled={isDisabled}>
                    Set </SuperButtonMemoized></div>
        </div>
    );
};

export default Setter;
