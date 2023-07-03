import React, {ChangeEvent, FC} from 'react';
import s from "./Input.module.css"

type InputProps = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    name: string
}
const Input: FC<InputProps> = ({callback, name, value}) => {
    return (
        <div className={s.inputWrapper}>
            <div className={s.inputWrapper_name}>{name} value</div>
            <div className={s.inputWrapper_input}>
                <input type={'number'} onChange={callback} value={value}/>
            </div>
        </div>
    );
};

export default Input;