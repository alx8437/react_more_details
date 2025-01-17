import React, {useState} from 'react';
import './App.css';

import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { OnOff } from "./components/OnOff/OnOff";

function App() {
    const [valueRating, setValueRating] = useState<RatingValueType>(1)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [isOn, setIsOn] = useState<boolean>(false);

    return (
        <div className="App">
            <OnOff isOn={isOn} setIsOn={setIsOn} />
            <Rating value={valueRating} setValueRating={setValueRating} />
            <UncontrolledRating />
            <Accordion titleValue={'Menu'} isCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
            <UncontrolledAccordion titleValue={'UncontrolledAccordion'} />
        </div>
    );
}

export default App;
