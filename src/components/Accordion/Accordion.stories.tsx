import { action } from '@storybook/addon-actions';

import  Accordion  from './Accordion';
import {useState} from "react";

export default  {
    component: Accordion,
};

const callback = action('Accordion mode changed')
const onClickCallback = action('Some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion
        onClick={onClickCallback}
        items={[
            {title: 'Irina', value: 1},
            {title: 'Oleg', value: 2},
            {title: 'Nasty', value: 3},
        ]}
        titleValue={'CollapsedAccordion'}
        isCollapsed={true}
        setAccordionCollapsed={callback}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        onClick={onClickCallback}
        items={[
            {title: 'Irina', value: 1},
            {title: 'Oleg', value: 2},
            {title: 'Nasty', value: 3},
        ]}
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

    return <Accordion
            onClick={onClickCallback}
            items={[
                {title: 'Irina', value: 1},
                {title: 'Oleg', value: 2},
                {title: 'Nasty', value: 3},
            ]}
            titleValue={'OpenedAccordion'}
            isCollapsed={collapsed}
            setAccordionCollapsed={setAccordionCollapsed}
        />
}