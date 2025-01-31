import {ChangeEvent, useRef, useState} from "react";

export default  {
    title: 'Input'
};

export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value="I am a senior FE developer"/>
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
