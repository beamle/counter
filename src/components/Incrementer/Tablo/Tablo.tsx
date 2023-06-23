import React, {FC} from 'react';
import s from "./Tablo.module.css";

type FinalStyle = {
    error: string
    default: string
    red: string
}

type TabloProps = {
    num: number
    setterIncorrect: boolean
    className: keyof FinalStyle
}


const Tablo: FC<TabloProps> = ({num, setterIncorrect, className}) => {
    console.log(className)
    const finalStyle = {
        error: s.setterIncorrect,
        default: s.default,
        red: s.red
    }

    const pFinalClassName = `${s.p} ${finalStyle[className]}`

    return (
        <div className={s.numWrapper}>
            {setterIncorrect ? <p className={pFinalClassName}>Incorrect value</p> : <p className={pFinalClassName}>{num}</p>}
        </div>
    );
};

export default Tablo;