import React, {FC} from 'react';
import Tablo from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";

type IncrementerProps = {
    num: number
    setNum: (num: number) => void
    maxCounter: number
    minCounter: number
    errorMessageActivator: boolean
}

const Incrementer:FC<IncrementerProps> = ({num, setNum, maxCounter, minCounter, errorMessageActivator}) => {

    const incrementHandler = () => num < maxCounter && setNum(num+1)
    const clearNum = () => num > minCounter && setNum(0)

    // const disabled2 = num === 0;
    // const className = `${disabled ? s.disabled : s.default}`

    const moreThanMaxCount = num === maxCounter ? "disabled" : "default";
    const equalToMInCount = num === minCounter ? "disabled" : "default";
    const className = num >= maxCounter ? "red" : "default"

    return (
        <div className={s.incrementer}>
            <Tablo num={num} className={className} errorMessageActivator={errorMessageActivator}/>
            <SuperButton className={moreThanMaxCount} callback={incrementHandler} disabled={num === maxCounter}>Inc</SuperButton>
            <SuperButton className={equalToMInCount} callback={clearNum} disabled={num === minCounter || num === 0}>Clear</SuperButton>
        </div>
    );
};

export default Incrementer;