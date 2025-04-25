import React, {useState, useCallback, memo} from 'react';

export default {
    title: 'useCallback'
}


// Дочерний компонент с мемоизацией
const Button = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
    console.log(`Рендер кнопки: ${label}`);
    return <button onClick={onClick}>{label}</button>;
});

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [draft, setDraft] = useState('');

    // Без useCallback - создается новая функция при каждом рендере
    const badIncrement = () => {
        setCount(c => c + 1);
    };

    // С useCallback - функция мемоизируется и не меняется при повторных рендерах
    const goodIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Зависимости пусты - функция создается один раз

    // Функция с зависимостью
    const updateDraft = useCallback((text: string) => {
        setDraft(text + new Date().toLocaleTimeString());
    }, [draft]); // Обновляется при изменении draft

    return (
        <div>
            <h2>Счетчик: {count}</h2>
            <Button onClick={badIncrement} label="Плохая кнопка" />
            <Button onClick={goodIncrement} label="Хорошая кнопка" />

            <input
                type="text"
                value={draft}
                onChange={(e) => updateDraft(e.target.value)}
                placeholder="Введите текст"
            />
        </div>
    );
};


