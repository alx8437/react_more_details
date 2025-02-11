import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default  {
    title: 'Input'
};

export const UncontrolledInput = () => <input/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;

        setParentValue(value)
    }

    return <input onChange={onChange} value={parentValue}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.currentTarget.checked;

        setParentValue(isChecked)
    }

    return <input type={"checkbox"} onChange={onChange} checked={parentValue}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Minsk</option>
    </select>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const {value} = e.currentTarget;
        setValue(value);
    }

    return <>
        <input onChange={onChange} />{value}
        </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onSave = () => {
        const element = inputRef.current as HTMLInputElement
        setValue(element.value)
    }

    return <>
        <input ref={inputRef}  />
        <button onClick={onSave}>save</button> actual value: {value}
    </>
}
