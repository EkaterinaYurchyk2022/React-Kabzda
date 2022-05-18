import React, {useEffect, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Clock} from './Clock';


export default {
    title: 'Clock',
    component: Clock,
}


export const BaseAnalogExample = () => {
    return <Clock mode={"analog"}/>
}

export const BaseDigitalExample = () => {
    return <Clock  mode={"digital"}/>
}