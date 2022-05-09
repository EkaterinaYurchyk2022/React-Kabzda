import React, {useState, useEffect} from "react";
import {Simulate} from "react-dom/test-utils";
import compositionUpdate = Simulate.compositionUpdate; //1

export default {
    title: 'useEffect demo'
}


//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementById
//document.title = "User"


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")


    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

