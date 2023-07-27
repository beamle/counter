import React, {FC, useEffect} from 'react';
import Tablo, {FinalStyle} from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";
import {changeCounterAC, CounterReducerActionsType} from "../../counter-reducer";
import {WRONG_VALUE} from "./Tablo/tablo-messages/tablo-messages";

type IncrementerProps = {
    counter: number | null
    maxCounter: number
    minCounter: number
    handleBtnDisabled: () => boolean
    tabloMessage: string
    setTabloMessage: (message: string) => void
    dispatchToMyStorage: (Action: CounterReducerActionsType) => void
}


const Incrementer: FC<IncrementerProps> = (props) => {
    const {counter, maxCounter, minCounter, handleBtnDisabled, tabloMessage, setTabloMessage} = props;

    const incrementHandler = () => {
        if (counter !== null) {
            counter < maxCounter && props.dispatchToMyStorage(changeCounterAC(counter + 1))
        } else {
            console.log("something is wrong")
        }
    }
    const clearNum = () => {
        if (counter) props.dispatchToMyStorage(changeCounterAC(minCounter))
    }

    /* Handle btn disable **/
    const incIsDisabled = handleBtnDisabled() || counter === null || counter === maxCounter
    const clearIsDisabled =  handleBtnDisabled() || counter === null || counter === minCounter || minCounter > maxCounter

    /* Стили **/
    const className: keyof FinalStyle = (minCounter < 0 || maxCounter < 0 || minCounter >= maxCounter ||
        (counter !== null && counter >= maxCounter) ? "wrongValue" : "default")

    useEffect(() => {
        if (minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || minCounter === maxCounter) {
            setTabloMessage(WRONG_VALUE)
        }
    }, [minCounter, maxCounter])

    // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning

    return (
        <div className={s.incrementer}>
            <div className={s.incrementerTablo}>
                <Tablo display={tabloMessage || counter} className={className}></Tablo>
            </div>
            <div className={s.incrementerButtons}>
                <SuperButton callback={incrementHandler} disabled={incIsDisabled}>
                    Inc</SuperButton>
                <SuperButton callback={clearNum} disabled={clearIsDisabled}>
                    Clear</SuperButton>
            </div>
        </div>
    );
};

export default Incrementer;
