import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from "./Setter.module.css";
import SuperButton from "../Button/SuperButton";
import Input from "../Input/Input";
import {NavLink} from "react-router-dom";

type SetterProps = {
    setMaxCounter: (a: number) => void
    setMinCounter: (a: number) => void
    maxCounter: number
    minCounter: number
    setCounter: (counter: number | null) => void
}

const Setter: FC<SetterProps> = (props) => {
    let {setCounter, maxCounter, minCounter, setMaxCounter, setMinCounter} = props;

    const handleMaxAndMinCounter = () => {
        localStorage.setItem('minCounter', JSON.stringify(minCounter))
        localStorage.setItem('maxCounter', JSON.stringify(maxCounter))
        setCounter(minCounter)
    }

    const handleMaxCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCounter(parseInt(e.currentTarget.value))
    }

    const handleMinCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCounter(parseInt(e.currentTarget.value))
    }

    const isDisabled = minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || maxCounter === minCounter;
    const inputClassName = isDisabled ? 'error' : 'default';

    return (
        <div className={s.setter}>
            <div className={s.setterInputs}>
                <Input value={maxCounter} callback={handleMaxCounterSetter} name={'Max'} className={inputClassName} />
                <Input value={minCounter} callback={handleMinCounterSetter} name={'Min'} className={inputClassName}/>
            </div>
            <div className={s.setterButton}>
                <NavLink to={"/"}>
                    <SuperButton className={'default'}
                                 callback={handleMaxAndMinCounter}
                                 disabled={isDisabled}>
                        Set </SuperButton>
                </NavLink></div>
        </div>
    );
};

export default Setter;
