import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordion({titleValue }: AccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    const setCollapsedHandler = () => {
        const action = {
            type: TOGGLE_COLLAPSED
        }

        dispatch(action)
    }

    return (
        <div>
            <AccordionTitle setCollapsedHandler={setCollapsedHandler} title={titleValue}/>
            {!state.collapsed && <AccordionBody/>}
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