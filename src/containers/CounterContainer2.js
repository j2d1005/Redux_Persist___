import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT2, DECREMENT2 } from '../reducers/counter.reducer2';

import Counter2 from '../components/Counter2';



const CounterContainer2 = () => {
    const { number2 } = useSelector(state => state.counter2)
    const dispatch = useDispatch();

    const handleIncrease = () => {
        console.log('inc');
        dispatch({type: INCREMENT2});
    };
    const handleDecrease = () => {
        console.log('dec')
        dispatch({type: DECREMENT2});
    };


    return (
        <Counter2 number2={number2} increment={handleIncrease} decrement={handleDecrease} />
    )
}

export default CounterContainer2;