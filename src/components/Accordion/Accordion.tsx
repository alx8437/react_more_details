import React from "react";

type AccordionPropsType = {
    titleValue: string
    isCollapsed: boolean
    setAccordionCollapsed: (isCollapsed: boolean) => void
}

function Accordion({titleValue, isCollapsed, setAccordionCollapsed}: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle setAccordionCollapsed={setAccordionCollapsed} isCollapsed={isCollapsed} title={titleValue}/>
            {!isCollapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion