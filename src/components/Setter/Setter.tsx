import React, {ChangeEvent, FC, useState} from 'react';
import s from "../Incrementer/incrementer.module.css";
import Tablo from "../Incrementer/Tablo/Tablo";
import SuperButton from "../Button/SuperButton";
import Input from "../Input/Input";

type SetterProps = {
    num: number
    setMaxSetter: (maxSetter: number) => void
    setMinSetter: (minSetter: number) => void
    maxSetter: number
    minSetter: number
    handleNum: () => void
}

const Setter: FC<SetterProps> = () => {

    return (
        <div className={s.incrementer}>

        </div>
    );
};

export default Setter;