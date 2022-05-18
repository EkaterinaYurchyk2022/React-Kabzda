import React from "react";
import {ClockViewPropsType} from "./Clock";
import s from './AnalogClockView.module.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    }
    return <div className={s.clock}>
        <div className={s.analogClock}>
            <div className={`$s.dial} ${s.seconds}`} style={secondsStyle}/>
            <div className={`$s.dial} ${s.minutes}`}  style={minutesStyle}/>
            <div className={`$s.dial} ${s.hours}`}  style={hoursStyle}/>
        </div>
    </div>

}