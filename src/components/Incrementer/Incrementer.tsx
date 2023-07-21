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

    /* Handle btn disable **/
    const incIsDisabled = handleBtnDisabled() || counter === null || counter === maxCounter
    const clearIsDisabled = handleBtnDisabled() || counter === null || counter === minCounter || minCounter > maxCounter

    /* Стили **/
    const moreThanMaxCount = (counter === null || counter === maxCounter) ? "disabled" : "default";
    const equalToMInCount = (counter === null || counter === minCounter) ? "disabled" : "default";
    const className: keyof FinalStyle = (minCounter < 0 || maxCounter < 0 || minCounter >= maxCounter ||
        (counter !== null && counter >= maxCounter) ? "wrongValue" : "default")

    console.log(localStorage.getItem('maxCounter'), "maxCounter in ls")
    console.log(localStorage.getItem("minCounter"), "minCounter in ls")

    useEffect(() => {
        if (minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || minCounter === maxCounter) {
            setTabloMessage('Wrong value')
        //     className = ((counter !== null && counter >= maxCounter)
        //         || minCounter > maxCounter || minCounter === maxCounter || minCounter < 0 || maxCounter < 0)
        //         ? "wrongValue"
        //         : "default"
        }
    }, [minCounter, maxCounter])

    // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning

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
