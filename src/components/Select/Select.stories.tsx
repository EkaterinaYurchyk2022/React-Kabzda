import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value,setValue]=useState('2');
    return (
        <Select value={value}
                items={[
                    {title: 'Anya', value: '1'},
                    {title: 'Vanya', value: '2'},
                    {title: 'Masha', value: '3'}
                ]}
                onChange={setValue}
        />
    )
}

export const WithoutValue = () => {
    const [value,setValue]=useState(null);

    return (
        <Select
            items={[
                {title: 'Anya', value: '1'},
                {title: 'Vanya', value: '2'},
                {title: 'Masha', value: '3'}
            ]}
            value={value}
            onChange={setValue}
        />
    )
}