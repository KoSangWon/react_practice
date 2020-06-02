import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(a => a + 1) //이런식으로도 사용 가능하다(최적화와 관련, 나중에 알아보자)
    }

    const onDecrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;