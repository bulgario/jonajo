import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const startCounterAction = (count) => {
  return {
    type: 'TICK',
    count: count
  }
}

const resetCounterAction = () => {
  return {
    type: 'RESET',
    count: 0
  }
}

const Countdown = () => {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  const resetCounter = () => {
    dispatch(resetCounterAction());
  };

  const startCounter = async () => {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    for (var i = 0; i < counter; i++) {
      dispatch(startCounterAction(counter))    
      await timer(1000);
    }
  };

  return (
    <>
      <h2>Counter</h2>
      { counter === 0 ? (
        <div>Its Over!</div>
      ) : counter }
      <br/>
      <button type='button' onClick={resetCounter}>Reset Counter</button>
      <br/>
      <button type='button' onClick={startCounter}>Start Counter</button>
    </>
  );
}

export default Countdown;