import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const Users = React.memo((props: {users: Array<string>}) => {
    console.log('Users render')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState<string[]>(
        ["Sasha", "Natasha", "Vlad", "Margarita"
        ])

    // Users перерендоривается только тогда, когда массив с users меняется.
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}