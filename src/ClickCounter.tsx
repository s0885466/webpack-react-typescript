import React, {useState} from 'react';

export const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const onClickHandler = () => {
        setCount(c => c + 1);
    }

    return (
        <div>
            <button onClick={onClickHandler}>Count {count}</button>
        </div>
    );
};