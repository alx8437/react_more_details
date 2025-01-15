import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
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