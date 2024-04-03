import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount, toggleButtonColor } from '../redux/Slice';

const Home = () => {
    const count = useSelector(state => state.counter.count);
    const buttonColor = useSelector(state => state.counter.buttonColor);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Count: {count}</h3>

            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>incByAmount</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>decByAmount</button>

            <button style={{ color: buttonColor === 'light' ? 'lightgray' : 'black' }} onClick={() => dispatch(toggleButtonColor())}>Toggle Button Color</button>
        </>
    );
};

export default Home;
