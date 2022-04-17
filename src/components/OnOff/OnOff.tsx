import React, {FC, useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOff: FC<OnOffPropsType> = ({on, onClick}) => {


    const onOffStyle = {
        display: 'flex',
        margin: '20px'
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '1px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }
    const onClickOnHandler = () => {
        onClick(true)
    }
    const onClickOffHandler = () => {
        onClick(false)
    }

    return (
        <div style={onOffStyle}>
            <div onClick={onClickOnHandler} style={onStyle}>On</div>
            <div onClick={onClickOffHandler} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
