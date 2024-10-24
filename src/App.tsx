import React from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
{/*
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
*/}

            <OnOff />
        </div>
    );
}

export default App;
