import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
    })

    useEffect(() => {
        console.log('useEffect only first render')
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeOutExample = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer: number = window.setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer);
    }, [])

    const getTime = (date: Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    }

    return <>
        Time, {getTime(time)}
    </>
}

