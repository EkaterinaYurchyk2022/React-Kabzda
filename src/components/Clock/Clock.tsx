import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType = {
    mode: "analog" | "digital"

}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let view
    switch (props.mode){
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType={
    date: Date
}



