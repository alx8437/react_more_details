import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const Users = React.memo((props: {users: Array<string>}) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState<string[]>(
        ["Sasha", "Natasha", "Vlad", "Margarita"
        ])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}