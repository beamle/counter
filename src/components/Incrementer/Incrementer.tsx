import React, {FC} from 'react';
import Tablo from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";

type IncrementerProps = {
    setter: boolean
    num: number
    setNum: (num: number) => void
    minSetter: number
    maxSetter: number
}

const Incrementer:FC<IncrementerProps> = ({setter, num, setNum, minSetter, maxSetter}) => {

    const incrementHandler = () => num < maxSetter && setNum(num+1)
    const clearNum = () => num > 0 && setNum(0)

    // const moreThanMaxCount = num === maxSetter ? "disabled" : "default";
    // const equalToMInCount = num === minSetter ? "disabled" : "default";
    function setDisabled() {
        return num === maxSetter ? "disabled" :
               num === minSetter ? "disabled" : "default";
    }
    const setterIncorrect = ((minSetter < 0 || minSetter >= maxSetter) || maxSetter < 0)

    const styleCalc = num >= maxSetter ? 'red' :
                    setterIncorrect ? 'error' : 'default'
    return (
        <div className={s.incrementer}>
            <Tablo num={num} setterIncorrect={setterIncorrect} className={styleCalc}/>
            <SuperButton className={setter ? setDisabled() : 'disabled'} callback={incrementHandler} disabled={num === maxSetter}>Inc</SuperButton>
            <SuperButton className={setter ? setDisabled() : 'disabled'} callback={clearNum} disabled={num === 0}>Clear</SuperButton>
        </div>
    );
};

export default Incrementer;