import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const Users = React.memo((props: {users: Array<string>}) => {
    console.log('Users render')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const HelpsToReactMemo = () => {
    console.log('Example1 render')
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState<string[]>(
        ["Sasha", "Natasha", "Vlad", "Margarita"
        ])

    // Оборачиваем в useMemo для предотвращения перерендера компонента User
    // т.к. filter возвращает нам новый массив

    const filteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('v') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>
        {counter}
        <Users users={filteredUsers} />
    </>
}