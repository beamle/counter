import React, {FC} from 'react';
import s from "./Tablo.module.css";

type FinalStyle = {
    // error: string
    default: string
    red: string
}

type TabloProps = {
    num: number
    className: keyof FinalStyle
    errorMessageActivator: boolean
}


const Tablo: FC<TabloProps> = ({num, className, errorMessageActivator}) => {
    console.log(className)
    const finalStyle = {
        default: s.default,
        red: s.red,
        error: s.error
    }

    const pFinalClassName = `${s.p} ${finalStyle[className]}`


    // tut dolzhen bytj const errorMessage. Esli v Settere pomenjalsja value , to on vyskakivaet

    return (
        <div className={s.numWrapper}>
            {<p className={pFinalClassName}>{errorMessageActivator ? "Please click set" : num}</p>}
        </div>
    );
};

export default Tablo;