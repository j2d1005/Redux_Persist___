import React from 'react';

const Counter = (props) => {
    const { number2, increment, decrement } = props;


    return (
        <>
            <div>
                { number2 }
            </div>
            <div>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={decrement}>-</button>
            </div>
        </>
    );
};

export default Counter;