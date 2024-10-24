import React from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    return (
        <div className="App">

            <OnOff />

            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />

            <UncontrolledRating />
            <UncontrolledRating />

   {/*         <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />*/}


      {/*      <OnOff />*/}
        </div>
    );
}

export default App;
