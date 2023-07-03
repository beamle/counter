import React, {FC, useEffect} from 'react';
import Tablo, {FinalStyle} from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";
import {NavLink} from "react-router-dom";

type IncrementerProps = {
    counter: number | null
    setCounter: (num: number | null) => void
    maxCounter: number
    minCounter: number
    handleBtnDisabled: () => boolean
    tabloMessage: string
    setTabloMessage: (message: string) => void
}

const Incrementer:FC<IncrementerProps> = (props) => {
    const {counter, setCounter, maxCounter, minCounter, handleBtnDisabled, tabloMessage, setTabloMessage} = props;

    const incrementHandler = () => {
        if(counter !== null) {
            counter < maxCounter && setCounter(counter+1)
        } else {
            console.log("something is wrong")}
    }
    const clearNum = () => { if(counter) setCounter(minCounter) }


    // Стили
    const moreThanMaxCount = (counter === null || counter === maxCounter) ? "disabled" : "default";
    const equalToMInCount = (counter === null || counter === minCounter) ? "disabled" : "default";

    let className: keyof FinalStyle = 'default';


    // const isDisabled = counter === maxCounter || counter === null || counter === minCounter || counter === 0 // TODO: make separate isDisabled

    console.log(localStorage.getItem('maxCounter'), "maxCounter in ls")
    console.log(localStorage.getItem("minCounter"), "minCounter in ls")

    if (minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || minCounter === maxCounter) {
        setTabloMessage('Wrong value')
        className =  ((counter !== null && counter >= maxCounter)
            || minCounter > maxCounter || minCounter === maxCounter || minCounter < 0 || maxCounter < 0 )
            ? "wrongValue"
            : "default"

    }




    return (
        <div className={s.incrementer}>
            <Tablo display={tabloMessage || counter} className={className} />
            <SuperButton className={moreThanMaxCount} callback={incrementHandler}
                         disabled={ counter === null || handleBtnDisabled() || counter === maxCounter}>
                Inc</SuperButton>
            <SuperButton className={equalToMInCount} callback={clearNum}
                         disabled={ counter === null || counter === minCounter || minCounter > maxCounter || handleBtnDisabled()}>
                Clear</SuperButton>
            <NavLink to={"/settings"}>
            <SuperButton className={'default'} callback={() => {}}>
                Set</SuperButton></NavLink>
        </div>
    );
};

export default Incrementer;