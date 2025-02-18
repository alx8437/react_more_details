import {Select} from "./Select";
import {useState} from "react";

export default  {
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('1')

    const onChangeValue = (value: any) => {
        setValue(value)
    }

    return <Select
        items={[
            {value: '1', title: 'Moscow'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Kiev'},
        ]}
        onChange={onChangeValue}
        value={value}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    const onChangeValue = (value: any) => {
        setValue(value)
    }

    return <Select
        items={[
            {value: '1', title: 'Moscow'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Kiev'},
        ]}
        onChange={onChangeValue}
        value={value}
    />
}