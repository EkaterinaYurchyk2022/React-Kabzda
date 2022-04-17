import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
}

export const TrueMode = () => <OnOff on={true} onClick={action('on or off clicked')}/>
export const FalseMode = () => <OnOff on={false} onClick={action('on or off clicked')}/>

export const ModeChanging = () => {
    let [on, setOn] = useState<boolean>(false)
    return <OnOff on={on} onClick={setOn}/>
}

