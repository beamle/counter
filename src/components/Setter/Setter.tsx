import React, {ChangeEvent, FC, useState} from 'react';
import s from "./Setter.module.css";
import SuperButton from "../Button/SuperButton";
import Input from "../Input/Input";

type SetterProps = {
    // num: number
    setMaxCounter: (a: number) => void
    setMinCounter: (a: number) => void
    maxCounter: number
    minCounter: number
    setCounter: (counter: number | null) => void
    // handleNum: () => void
    setTabloMessage: (tabloMessage: string) => void
}

const Setter: FC<SetterProps> = (props) => {
    // let {setMaxCounter, setMinCounter, setErrorMessageActivator, setCounter, minCounter, maxCounter, setZehrena4evatelj} = props;
    // let { setErrorMessageActivator, setCounter, setZehrena4evatelj, setBigState, minCounter, maxCounter, setMaxCounter, setMinCounter} = props;

    let { setCounter, maxCounter, minCounter, setMaxCounter, setMinCounter, setTabloMessage } = props;

    const handleMaxAndMinCounter = () => {
        localStorage.setItem('minCounter', JSON.stringify(minCounter))
        localStorage.setItem('maxCounter', JSON.stringify(maxCounter))
        setCounter(minCounter)
        setTabloMessage('')
    }

    const handleMaxCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCounter(parseInt(e.currentTarget.value))
        setTabloMessage('Please click Set')
    }

    const handleMinCounterSetter = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCounter(parseInt(e.currentTarget.value))
        setTabloMessage('Please click Set')
    }

    console.log(maxCounter, 'maxCounter in Setter')
    console.log(minCounter, ' mixCounter in Setter')

    return (
        <div className={s.setter}>
            {/*Kogda na4inaju menjatj value, to dolzhno vyska,kivatj soobshenie "please click set" */}
            <Input value={maxCounter} callback={handleMaxCounterSetter} name={'Max'}/>
            <Input value={minCounter} callback={handleMinCounterSetter} name={'Min'}/>
            <SuperButton className={'default'}
                         callback={handleMaxAndMinCounter}
                         disabled={minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || maxCounter === minCounter}>
                Set </SuperButton>
        </div>
    );
};

export default Setter;
