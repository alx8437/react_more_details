import {useEffect, useState} from "react";

const get2DigitString = (num: number) => {
    return num < 10 ? "0" + num : num
}

export const Clock = () => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    const hours = get2DigitString(date.getHours());
    const minutes = get2DigitString(date.getMinutes());
    const seconds = get2DigitString(date.getSeconds());

    return <div>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
    </div>
}