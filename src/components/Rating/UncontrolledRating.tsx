import React, {useState} from "react";



export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    const setRating = (newValue: number) => {
        setValue(newValue);
    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => setRating(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => setRating(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => setRating(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => setRating(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => setRating(5)}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star({ selected }: StarPropsType) {
    return (
        <>
            {selected ? <span><b>star </b></span> : <span>star </span>}
        </>
    )
}