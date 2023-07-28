import React, {FC, useCallback, useEffect} from 'react';
import Tablo, {FinalStyle} from "./Tablo/Tablo";
import s from "./incrementer.module.css";
import SuperButton from "../Button/SuperButton";
import {changeCounterAC, changeMessageAC, MyStorageType} from "../../counter-reducer";
import {WRONG_VALUE} from "./Tablo/tablo-messages/tablo-messages";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {MyLStorageType} from "../../myLocalStorage-reducer";
import SuperButtonMemoized from "../Button/SuperButton";
import TabloMemoized from "./Tablo/Tablo";


const Incrementer: FC = (props) => {
    const dispatch = useDispatch();
    const myStorage = useSelector<AppRootState, MyStorageType>(state => state.myStorage)
        // useSelector prinimaet 1 callback funkctiju, callback vozvbrashaet zna4enie, eto zna4nie sohranaetsa v myStorage
        // 1 tip - tip otkuda izvlekaem, to estj state, t.k state formiruetsa na osnove rootReducers.
        // 2 tip - to, 4to vernetsa iz callback
    const {counter, maxCounter, minCounter, tabloMessage} = myStorage
    const myLStorage = useSelector<AppRootState, MyLStorageType>(state => state.myLocalStorage)
    const {_minCounterLS, _maxCounterLS} = myLStorage

    const incrementHandler = useCallback( () => {
        if (counter !== null) {
            counter < maxCounter && dispatch(changeCounterAC(counter + 1))
        } else {
            console.log("something is wrong")
        }
    },[])

    const clearNum = useCallback(() => {
        if (counter) dispatch(changeCounterAC(minCounter))
    }, [])

    const handleBtnDisabled = () => {
        // Check if min/maxCounter in myLocalStorage is changed -> disable btn if did
        // At the same time Setter changes tabloMessage to "Please click Set"
        let isDisabled = false;
        if (maxCounter !== _maxCounterLS) {
            return !isDisabled
        } else if (minCounter !== _minCounterLS) {
            return !isDisabled
        }
        return isDisabled
    }

    /* Handle btn disable **/
    const incIsDisabled = handleBtnDisabled() || counter === null || counter === maxCounter
    const clearIsDisabled =  handleBtnDisabled() || counter === null || counter === minCounter || minCounter > maxCounter

    /* Стили **/
    const className: keyof FinalStyle = (minCounter < 0 || maxCounter < 0 || minCounter >= maxCounter ||
        (counter !== null && counter >= maxCounter) ? "wrongValue" : "default")

    useEffect(() => {
        if (minCounter < 0 || maxCounter < 0 || minCounter > maxCounter || minCounter === maxCounter) {
            dispatch(changeMessageAC(WRONG_VALUE))
        }
    }, [minCounter, maxCounter])

    // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning

    return (
        <div className={s.incrementer}>
            <div className={s.incrementerTablo}>
                <TabloMemoized display={tabloMessage || counter} className={className}></TabloMemoized>
            </div>
            <div className={s.incrementerButtons}>
                <SuperButtonMemoized callback={incrementHandler} disabled={incIsDisabled}>
                    Inc</SuperButtonMemoized>
                <SuperButtonMemoized callback={clearNum} disabled={clearIsDisabled}>
                    Clear</SuperButtonMemoized>
            </div>
        </div>
    );
};

export default Incrementer;
