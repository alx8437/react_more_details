import React, {useState} from "react";

//UncontrolledAccordion сделать так, чтобы в нем был
// локальный useState

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion({titleValue }: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true);

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle setCollapsedHandler={setCollapsedHandler} title={titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    setCollapsedHandler: () => void
}

function AccordionTitle({title, setCollapsedHandler}: AccordionTitlePropsType) {
    return (
        <h3 onClick={setCollapsedHandler}>{title}</h3>
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

export default UncontrolledAccordion