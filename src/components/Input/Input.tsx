import React, {ChangeEvent, FC} from 'react';
import s from "./Input.module.css"

type InputProps = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    name: string
    className: 'default' | 'error'
}
const Input: FC<InputProps> = ({callback, name, value, className}) => {

    const finalClassName = {
        default: s.default,
        error: s.error
    }

    return (
        <div className={s.inputWrapper}>
            <div className={s.inputWrapper_name}>{name} value</div>
            <div className={s.inputWrapper_input}>
                <input type={'number'} onChange={callback} value={value} className={finalClassName[className]}/>
            </div>
        </div>
    );
};

export default Input;