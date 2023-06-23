import React, {FC} from 'react';
import Tablo from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";

type IncrementerProps = {
    num: number
    setNum: (num: number) => void
}

const Incrementer:FC<IncrementerProps> = ({num, setNum}) => {

    const incrementHandler = () => num < 5 && setNum(num+1)
    const clearNum = () => num > 0 && setNum(0)

    // const disabled2 = num === 0;
    // const className = `${disabled ? s.disabled : s.default}`

    const moreThanMaxCount = num === 5 ? "disabled" : "default";
    const equalToMInCount = num === 0 ? "disabled" : "default";

    return (
        <div className={s.incrementer}>
            <Tablo num={num} className={'red'}/>
            <SuperButton className={moreThanMaxCount} callback={incrementHandler} disabled={num === 5}>Inc</SuperButton>
            <SuperButton className={equalToMInCount} callback={clearNum} disabled={num === 0}>Clear</SuperButton>
        </div>
    );
};

export default Incrementer;