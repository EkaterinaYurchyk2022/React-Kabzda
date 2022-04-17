import React from "react";

type ItemType={
    title:string
    value:any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick:(value:any)=>void
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}  onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onChange}>{props.title}</h3>
}


type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick:(value:any)=>void
}


const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {
            props.items.map((item,index) => {
                return (
                    <li onClick={()=>{ props.onClick(item.value) }} key={index}>{item.title}</li>
                )
            })
        }
    </ul>
}

