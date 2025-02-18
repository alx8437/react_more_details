import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any;
    onChange: (value: any) => void;
    items: Array<ItemType>
}

export const Select = ({ value, items, onChange }: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState<any>(value);

    const selectedItem = items.find(item => item.value === value);
    const hoveredElementItem = items.find(item => item.value === hoveredElementValue);

    const toggleItems = () => {
        setActive(!active)
    }

    const onClickItem = (value: any) => {
        onChange(value)
        setActive(false)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i += 1 ) {
                if (items[i].value === hoveredElementValue) {
                    const element =
                        e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]

                    if (element) {
                        onChange(element.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value])

    return (
        <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active && <div>
                {items.map(((item, index) =>
                    <div
                        onMouseEnter={() => setHoveredElementValue(item.value)}
                        className={styles.item + ' ' + (hoveredElementItem === item ? styles.selected : '')}
                        key={index}
                        onClick={() => onClickItem(item.value)}
                    >{item.title}
                    </div>))}
            </div>}
        </div>
    );
};

