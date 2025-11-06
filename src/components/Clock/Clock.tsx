import {useEffect, useState} from "react";
import './clock.css'
import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";

export type ClockComponentsPropsType = {
    hours: number
    minutes: number
    seconds: number
}

type ClockPropsType = {
    mode: 'analog' | 'digital'
}

export const Clock = (props: ClockPropsType) => {
    const {mode} = props
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        mode === 'digital'
            ? <DigitalClock hours={hours} minutes={minutes} seconds={seconds}/>
            : <AnalogClock hours={hours} seconds={seconds} minutes={minutes} />

    )
}