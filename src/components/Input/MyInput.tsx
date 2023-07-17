import React, {ChangeEvent, FC} from 'react';
import s from "./Input.module.css"
import Input from "@mui/material/Input";


export type ClassNameValues = {
    default: string
    error: string
}

type InputProps = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    name: string
    className: keyof ClassNameValues
}
const MyInput: FC<InputProps> = ({callback, name, value, className}) => {

    const finalClassName = `${s.inputWrapper_input} ${s[className]}`
    console.log(className)

    return (
        <div className={s.inputWrapper}>
            <div className={s.inputWrapper_name}>{name}</div>
            <div className={finalClassName}>
                <input type={'number'} onChange={callback} value={value}/>
            </div>
        </div>
    );
};

export default MyInput;