import React, {useState} from "react";


export default {
    title: 'Use state demo'
}

function generateData() {
    //difficult counting
    return 12389874123
}

export const Example1 = () => {

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => {
    //     return state + 1;
    // }

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}