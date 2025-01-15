import { action } from '@storybook/addon-actions';

import  Accordion  from './Accordion';
import {useState} from "react";

export default  {
    component: Accordion,
};

const setAccordionCollapsedHandler = () =>  action('Set accordion collapsed')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={'CollapsedAccordion'}
        isCollapsed={true}
        setAccordionCollapsed={() => {
            console.log('setAccordionCollapsed')}}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'OpenedAccordion'} isCollapsed={false} setAccordionCollapsed={setAccordionCollapsedHandler} />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const setAccordionCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <Accordion titleValue={'OpenedAccordion'} isCollapsed={collapsed} setAccordionCollapsed={setAccordionCollapsed} />
}