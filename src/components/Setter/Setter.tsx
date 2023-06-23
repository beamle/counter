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

const Setter: FC<SetterProps> =
    ({num, setMaxSetter, setMinSetter, maxSetter, minSetter, handleNum}) => {
    const maxSetterHandler = (e:ChangeEvent<HTMLInputElement>) => setMaxSetter(parseInt(e.currentTarget.value))
    const minSetterHandler = (e:ChangeEvent<HTMLInputElement>) => setMinSetter(parseInt(e.currentTarget.value))

    const setMaxMinSetters = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    const moreThanMaxCount = num === 5 ? "disabled" : "default";
    const equalToMInCount = num === 0 ? "disabled" : "default";
    return (
        <div className={s.incrementer}>
            <Input callback={maxSetterHandler} value={maxSetter} name={'Max'}/>
            <Input callback={minSetterHandler} value={minSetter} name={'Min'}/>
            <SuperButton className={'default'} callback={handleNum}>Set</SuperButton>
        </div>
    );
};

export default Setter;