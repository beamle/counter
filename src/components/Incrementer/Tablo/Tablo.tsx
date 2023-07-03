import React, {FC} from 'react';
import s from "./Tablo.module.css";

export type FinalStyle = {
    // error: string
    default: string
    wrongValue: string
    disabled: string
}

type TabloProps = {
    display: number | string | null
    className: keyof FinalStyle

}


const Tablo: FC<TabloProps> = ({display, className}) => {

    const finalStyle = {
        default: s.default,
        wrongValue: s.wrongValue,
        disabled: s.disabled
    }

    const pFinalClassName = `${s.p} ${finalStyle[className]}`


    // tut dolzhen bytj const errorMessage. Esli v Settere pomenjalsja value , to on vyskakivaet

    return (
        <div className={s.numWrapper}>
            <p className={pFinalClassName}>{display}</p>
        </div>
    );
};

export default Tablo;