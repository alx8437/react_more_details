import {useEffect, useState} from "react";
import './clock.css'

const get2DigitString = (num: number) => {
    return num < 10 ? "0" + num : num
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

    const hours = get2DigitString(date.getHours());
    const minutes = get2DigitString(date.getMinutes());
    const seconds = get2DigitString(date.getSeconds());

    return (
        mode === 'digital'
            ?
            <div>
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            :
            <>
                <div className="clock">
                    <div
                        className="hour_hand"
                        style={{
                            transform: `rotateZ(${date.getHours() * 30}deg)`
                        }}
                    />
                    <div
                        className="min_hand"
                        style={{
                            transform: `rotateZ(${date.getMinutes() * 6}deg)`
                        }}
                    />
                    <div
                        className="sec_hand"
                        style={{
                            transform: `rotateZ(${date.getSeconds() * 6}deg)`
                        }}
                    />
                    <span className="twelve">12</span>
                    <span className="one">1</span>
                    <span className="two">2</span>
                    <span className="three">3</span>
                    <span className="four">4</span>
                    <span className="five">5</span>
                    <span className="six">6</span>
                    <span className="seven">7</span>
                    <span className="eight">8</span>
                    <span className="nine">9</span>
                    <span className="ten">10</span>
                    <span className="eleven">11</span>
                </div>
            </>
    )
}