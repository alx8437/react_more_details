import React, {useState} from "react";

export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    const setRating = (newValue: number) => {
        setValue(newValue);
    }

    return (
        <div style={{display: 'flex'}}>
            <Star selected={value > 0} setRating={setRating} rating={1} />
            <Star selected={value > 1} setRating={setRating} rating={2} />
            <Star selected={value > 2} setRating={setRating} rating={3} />
            <Star selected={value > 3} setRating={setRating} rating={4} />
            <Star selected={value > 4} setRating={setRating} rating={5} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: (value: number) => void
    rating: number
}

function Star({ selected, setRating, rating }: StarPropsType) {
    return (
        <div onClick={() => setRating(rating)}>
            {selected ? <span><b>star </b></span> : <span>star </span>}
        </div>
    )
}