import React, {ChangeEvent, FC, ReactNode} from 'react';
import s from "./SuperButton.module.css";
import {Button} from "@mui/material";

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
        <Button
            className={finalClassName}
            sx={{"&.Mui-disabled": {background: "#606060", color: "#c0c0c0"},
                borderRadius: '50px',
                mr: '5px',
            }}
            onClick={callback}
            disabled={disabled}
            variant={"contained"}
        >{children}</Button>
    );
};

export default SuperButton;