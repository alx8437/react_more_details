import { action } from '@storybook/addon-actions';

import  Accordion  from './Accordion';
import {useState} from "react";

export default  {
    component: Accordion,
};

const callback = action('Accordion mode changed')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={'CollapsedAccordion'}
        isCollapsed={true}
        setAccordionCollapsed={callback}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={'OpenedAccordion'}
        isCollapsed={false}
        setAccordionCollapsed={callback}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const setAccordionCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <Accordion titleValue={'OpenedAccordion'} isCollapsed={collapsed} setAccordionCollapsed={setAccordionCollapsed} />
}