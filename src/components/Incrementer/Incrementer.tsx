import React, {FC, useEffect} from 'react';
import Tablo, {FinalStyle} from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";

type IncrementerProps = {
    counter: number | null
    setCounter: (num: number | null) => void
    maxCounter: number
    minCounter: number
    handleBtnDisabled: () => boolean
    tabloMessage: string
    setTabloMessage: (message: string) => void
}

const Incrementer: FC<IncrementerProps> = (props) => {
    const {counter, setCounter, maxCounter, minCounter, handleBtnDisabled, tabloMessage, setTabloMessage} = props;

    const incrementHandler = () => {
        if (counter !== null) {
            counter < maxCounter && setCounter(counter + 1)
        } else {
            console.log("something is wrong")
        }
    }
    const clearNum = () => {
        if (counter) setCounter(minCounter)
    }

    // Стили
    const moreThanMaxCount = (counter === null || counter === maxCounter) ? "disabled" : "default";
    const equalToMInCount = (counter === null || counter === minCounter) ? "disabled" : "default";

    console.log(localStorage.getItem('maxCounter'), "maxCounter in ls")
    console.log(localStorage.getItem("minCounter"), "minCounter in ls")

    let className: keyof FinalStyle = 'default';

    if (minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || minCounter === maxCounter) {
        setTabloMessage('Wrong value')
        className = ((counter !== null && counter >= maxCounter)
            || minCounter > maxCounter || minCounter === maxCounter || minCounter < 0 || maxCounter < 0)
            ? "wrongValue"
            : "default"

    }

    const incIsDisabled = counter === null || handleBtnDisabled() || counter === maxCounter
    const clearIsDisabled = counter === null || counter === minCounter || minCounter > maxCounter || handleBtnDisabled()


    return (
        <div className={s.incrementer}>
            <div className={s.incrementerTablo}>
                <Tablo display={tabloMessage || counter} className={className}></Tablo>
            </div>
            <div className={s.incrementerButtons}>
                <SuperButton className={moreThanMaxCount} callback={incrementHandler}
                             disabled={incIsDisabled}>
                Inc</SuperButton>
                <SuperButton className={equalToMInCount} callback={clearNum}
                             disabled={clearIsDisabled}>
                    Clear</SuperButton>
            </div>
        </div>
    );
};

export default Incrementer;