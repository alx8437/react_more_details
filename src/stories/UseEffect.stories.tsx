import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        //api.getUsers().then
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User"
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

