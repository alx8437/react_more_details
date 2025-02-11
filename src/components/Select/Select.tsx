import React from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any;
    onChange: (value: any) => void;
    items: Array<ItemType>
}

export const Select = ({ value, items, onChange }: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {items.map(item => item.title)}
        </div>
    );
};

