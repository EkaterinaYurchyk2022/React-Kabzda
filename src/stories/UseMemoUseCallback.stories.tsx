import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i < a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i < b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        //+ приведение строки в number, т.к. в useState иниц.значение 0 - число,зн. тип стейта - число
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        //Number() - второй вариант приведение строки к number
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Katya", "Anya", "Tanya"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > 1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Redux", "CSS"])


    const memoizedBooks = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedBooks2 = useCallback(() => {
            const newUsers = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newUsers)
        }, [books]
    )


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedBooks2}/>
    </>
}
type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    return <div>
        <button onClick={() => props.addBook()}>addBook</button>
    </div>
}
const Book = React.memo(BooksSecret)