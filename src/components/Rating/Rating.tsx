import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType =  {
    value: RatingValueType
    setValueRating: (value: RatingValueType) => void
}

export function Rating({value, setValueRating}: RatingPropsType) {

    return (
        <div>
            <Star value={1} selected={value > 0} setValueRating={setValueRating}/>
            <Star value={2} selected={value > 1} setValueRating={setValueRating}/>
            <Star value={3} selected={value > 2} setValueRating={setValueRating}/>
            <Star value={4} selected={value > 3} setValueRating={setValueRating}/>
            <Star value={5} selected={value > 4} setValueRating={setValueRating}/>
        </div>
    )
}

type StarPropsType = {
    setValueRating: (value: RatingValueType) => void
    selected: boolean
    value: RatingValueType
}

function Star({ selected, setValueRating, value }: StarPropsType) {
    return (

            <span onClick={() => setValueRating(value)}>{selected ? <b>star </b> : 'star '}</span>

    )
}