import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    const setRating = (newValue: RatingValueType) => {
        setValue(newValue);
    }

    return (
        <div style={{display: 'flex'}}>
            <Star selected={value > 0} setRating={() => setRating(1)} />
            <Star selected={value > 1} setRating={() => setRating(2)} />
            <Star selected={value > 2} setRating={() => setRating(3)} />
            <Star selected={value > 3} setRating={() => setRating(4)} />
            <Star selected={value > 4} setRating={() => setRating(5)} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

function Star({ selected, setRating }: StarPropsType) {
    return (
        <div onClick={setRating}>
            {selected ? <span><b>star </b></span> : <span>star </span>}
        </div>
    )
}