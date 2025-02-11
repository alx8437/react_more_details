import React from "react";
import {strict} from "node:assert";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    isCollapsed: boolean
    setAccordionCollapsed: (isCollapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion({titleValue, isCollapsed, setAccordionCollapsed, items, onClick}: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle setAccordionCollapsed={setAccordionCollapsed} isCollapsed={isCollapsed} title={titleValue}/>
            {!isCollapsed && <AccordionBody onClick={onClick} items={items}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    isCollapsed: boolean
    setAccordionCollapsed: (isCollapsed: boolean) => void
}

function AccordionTitle({title, isCollapsed, setAccordionCollapsed}: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => setAccordionCollapsed(!isCollapsed)}>{title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({ items, onClick }: AccordionBodyPropsType) {
    return (
        <ul>
            {items.map((item, index) => <li onClick={() => onClick(item.value)} key={index}>{item.title}</li>)}
        </ul>
    )
}

export default Accordion