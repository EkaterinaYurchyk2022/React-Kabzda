import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}


type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

const UncontrolledAccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}


const UncontrolledAccordionBody = () => {
    console.log('UncontrolledAccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

