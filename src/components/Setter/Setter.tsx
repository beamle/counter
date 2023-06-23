import React, {ChangeEvent, FC, useState} from 'react';
import s from "../Incrementer/incrementer.module.css";
import Tablo from "../Incrementer/Tablo/Tablo";
import SuperButton from "../Button/SuperButton";
import Input from "../Input/Input";

type SetterProps = {
    // num: number
    setMaxCounter: (a: number) => void
    setMinCounter: (a: number) => void
    // maxCounter: number
    // minCounter: number
    // handleNum: () => void
    setErrorMessageActivator: (errorMessageActivator: boolean) => void
}

const Setter: FC<SetterProps> = (props) => {
    let {setMaxCounter, setMinCounter, setErrorMessageActivator} = props;
    const handleMaxCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCounter(parseInt(e.currentTarget.value))
        setErrorMessageActivator(true)
    }

    const handleMinCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCounter(parseInt(e.currentTarget.value))
        setErrorMessageActivator(true)
    }

    const handleCounterSetter = () => {
        setErrorMessageActivator(false)
    }

    return (
        <div className={s.incrementer}>
            {/*Kogda na4inaju menjatj value, to dolzhno vyska,kivatj soobshenie "please click set" */}
            <Input callback={handleMaxCounterSetter} name={'Max'}/>
            <Input callback={handleMinCounterSetter} name={'Min'}/>
            <SuperButton className={'default'} callback={handleCounterSetter}>Set </SuperButton>
        </div>
    );
};

export default Setter;