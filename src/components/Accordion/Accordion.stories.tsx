import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return(
        <Accordion items={[{title: '1', value: 1}]}
                   titleValue={'menu'}
                   collapsed={true}
                   onChange={callback}
                   onClick={onClickCallback}
        />
    )
}
export const UsersUnCollapsedMode = () => {
    return (
        <Accordion titleValue={'users'}
                   collapsed={false}
                   onChange={callback}
                   items={[
                       {title: 'Ann', value: 1},
                       {title: 'Mag', value: 2},
                       {title: 'Tori', value: 3}
                   ]}
                   onClick={onClickCallback}
        />

    )
}
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(false)
    return <Accordion
        titleValue={'users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'Ann', value: 1},
            {title: 'Mag', value: 2},
            {title: 'Tori', value: 3}
        ]}
        onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}
    />
}



