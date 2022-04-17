import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    // component: OnOff,
}


export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {
    let [value, setValue] = useState('')

    const on = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }


    return <><input onChange={on}/> - {value} </>
}


export const GetValueOfUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>
}


export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChange}/>
}


export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Grodno</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>














