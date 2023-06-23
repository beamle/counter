import React, {FC, ReactNode} from 'react';
import s from "./SuperButton.module.css";

type ClassNameType = {
    disabled: string
    default: string
}

type SuperButtonProps = {
    className: keyof ClassNameType
    disabled?: boolean
    callback: () => void
    children: ReactNode
}

const SuperButton:FC<SuperButtonProps> = ({className, callback, disabled, children}) => {

    const style = {
        disabled: s.disabled,
        default: s.button
    }

    const finalClassName = `${s.button} ${style[className]}`


    return (
        <button
            className={finalClassName}
            onClick={callback}
            disabled={disabled}>{children}</button>
    );
};

export default SuperButton;