import React, {FC} from 'react';
import s from "./Tablo.module.css";

type FinalStyle = {
    error: string
    default: string
    red: string
}

type TabloProps = {
    num: number
    className?: keyof FinalStyle
}


const Tablo: FC<TabloProps> = ({num, className}) => {
    console.log(className)
    const finalStyle = {
        default: s.default,
        red: s.red
    }

    const pFinalClassName = `${s.p}`

    return (
        <div className={s.numWrapper}>
            {<p className={pFinalClassName}>{num}</p>}
        </div>
    );
};

export default Tablo;