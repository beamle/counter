import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from "./Setter.module.css";
import SuperButton from "../Button/SuperButton";
import MyInput, {ClassNameValues} from "../Input/MyInput";
import {
    changeCounterAC,
    changeMaxCounterAC,
    changeMinCounterAC,
    counterReducer, CounterReducerActionsType
} from "../../counter-reducer";
import {setMinMaxToLocalStorageAC, SetterReducerActionsType} from "../../myLocalStorage-reducer";
import {EMPTY, PLEASE_CLICK_SET} from "../Incrementer/Tablo/tablo-messages/tablo-messages";
import {useDispatch} from "react-redux";

type SetterProps = {
    maxCounter: number
    minCounter: number
    setTabloMessage: (tabloMessage: string) => void
    // dispatchToLocalStorage: (action: SetterReducerActionsType) => void
    myLocalStorage: {[key: string]: number}
}

const Setter: FC<SetterProps> = (props) => {
    let {maxCounter, minCounter, setTabloMessage, myLocalStorage} = props;
    const dispatch = useDispatch();

    const handleMaxAndMinCounter = () => {
        // SET btn sets new max/min values to myLocalStorage
        dispatch(setMinMaxToLocalStorageAC(minCounter, maxCounter));
        dispatch(changeCounterAC(minCounter))
        setTabloMessage(EMPTY)
    }

    const handleMaxCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxCounterAC(parseInt(e.currentTarget.value)))
    }

    const handleMinCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinCounterAC(parseInt(e.currentTarget.value)))
    }

    useEffect(() => {
        if (myLocalStorage['_maxCounter'] !== maxCounter) {
            setTabloMessage(PLEASE_CLICK_SET)
        } else if (myLocalStorage['_minCounter'] !== minCounter) {
            setTabloMessage(PLEASE_CLICK_SET)
        } else setTabloMessage('')
    }, [maxCounter, minCounter])

    const isDisabled = minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || maxCounter === minCounter

    /* Styles */
    let className: keyof ClassNameValues = isDisabled ? 'error' : 'default';

    return (
        <div className={s.setter}>
            <div className={s.setterInputs}>
                <MyInput value={maxCounter} callback={handleMaxCounterSetter} name={'Max'} className={className}/>
                <MyInput value={minCounter} callback={handleMinCounterSetter} name={'Min'} className={className}/></div>
            <div className={s.setterButton}>
                <SuperButton callback={handleMaxAndMinCounter} disabled={isDisabled}>
                    Set </SuperButton></div>
        </div>
    );
};

export default Setter;
