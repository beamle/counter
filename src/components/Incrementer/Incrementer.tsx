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
}

const Incrementer: FC<IncrementerProps> = (props) => {
    const {counter, setCounter, maxCounter, minCounter} = props;

    const incrementHandler = () => {
        if (counter !== null && counter < maxCounter) {
            setCounter(counter + 1)
        } else {
            console.log("something is wrong")
        }
    }
    const clearNum = () => counter && setCounter(minCounter)



    return (
        <div className={s.incrementer}>
            <div className={s.incrementerTablo}>
                <Tablo display={counter} />
            </div>
            <div className={s.incrementerButtons}>
                <SuperButton callback={incrementHandler} disabled={counter === maxCounter}>
                    Inc</SuperButton>
                <SuperButton callback={clearNum}>
                    Clear</SuperButton>
                <NavLink to={"/settings"}>
                    <SuperButton className={'default'}>
                        Set</SuperButton></NavLink>
            </div>
        </div>
    );
};

export default Incrementer;