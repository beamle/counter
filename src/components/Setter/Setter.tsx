import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from "./Setter.module.css";
import SuperButton from "../Button/SuperButton";
import MyInput, {ClassNameValues} from "../Input/MyInput";
import {isDisabled} from "@testing-library/user-event/dist/utils";

type SetterProps = {
    // num: number
    setMaxCounter: (a: number) => void
    setMinCounter: (a: number) => void
    maxCounter: number
    minCounter: number
    setCounter: (counter: number | null) => void
    // handleNum: () => void
    setTabloMessage: (tabloMessage: string) => void
}

const Setter: FC<SetterProps> = (props) => {
    let {setCounter, maxCounter, minCounter, setMaxCounter, setMinCounter, setTabloMessage} = props;

    const handleMaxAndMinCounter = () => {
        localStorage.setItem('minCounter', JSON.stringify(minCounter))
        localStorage.setItem('maxCounter', JSON.stringify(maxCounter))
        setCounter(minCounter)
        setTabloMessage('')
    }

    const handleMaxCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCounter(parseInt(e.currentTarget.value))
        // setTabloMessage('Please click Set')
    }

    const handleMinCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCounter(parseInt(e.currentTarget.value))
        // setTabloMessage('Please click Set')
    }

    useEffect(() => {
        if (localStorage.getItem('maxCounter') !== JSON.stringify(maxCounter)) {
            setTabloMessage('Please click Set')
        } else if (localStorage.getItem('minCounter') !== JSON.stringify(minCounter)) {
            setTabloMessage('Please click Set')
        } else setTabloMessage('')
    }, [maxCounter, minCounter])

    const isDisabled = minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || maxCounter === minCounter

    /* Styles */

    let className: keyof ClassNameValues = 'default';
    if (isDisabled) className = 'error';

    return (
        <div className={s.setter}>
            <div className={s.setterInputs}>
                <MyInput value={maxCounter} callback={handleMaxCounterSetter} name={'Max'} className={className}/>
                <MyInput value={minCounter} callback={handleMinCounterSetter} name={'Min'} className={className}/></div>
            <div className={s.setterButton}>
                <SuperButton className={'default'}
                             callback={handleMaxAndMinCounter}
                             disabled={isDisabled}>
                    Set </SuperButton></div>
        </div>
    );
};

export default Setter;
