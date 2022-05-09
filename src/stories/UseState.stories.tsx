import React, {useState} from "react"; //3284982733

export default {
    title: 'useState demo'
}

function generateData(){
    //difficult counting
    console.log("generateData")
    return 3284982732
}


export const Example1 = () => {
    console.log("Example1")


    // const inintValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData) //[3284982732, function(newValue){}]


    return <>
        <button onClick={() => setCounter(state=>state + 1)}>+</button>
        {counter}
    </>
}

