import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import  Accordion  from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

const setAccordionCollapsedHandler = () =>  action('Set accordion collapsed')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={'CollapsedAccordion'}
        isCollapsed={true}
        setAccordionCollapsed={setAccordionCollapsedHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'OpenedAccordion'} isCollapsed={false} setAccordionCollapsed={() => {}} />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const setAccordionCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <Accordion titleValue={'OpenedAccordion'} isCollapsed={collapsed} setAccordionCollapsed={setAccordionCollapsed} />
}