import React, {ChangeEvent, FC, ReactNode} from 'react';
import s from "./SuperButton.module.css";
import {Button} from "@mui/material";

type ClassNameType = {
    disabled: string
    default: string
}

type SuperButtonProps = {
    disabled?: boolean
    callback: () => void
    children: ReactNode
}

// const style = {
//     disabled: s.disabled,
//     default: s.button
// }

const SuperButton:FC<SuperButtonProps> = ({callback, disabled, children}) => {

    // const finalClassName = `${s.button} ${style[className]}` // coz of MUI we don't use it anymore

    return (
        <Button
            // className={finalClassName}
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

const SuperButtonMemoized = React.memo(SuperButton)
export default SuperButtonMemoized