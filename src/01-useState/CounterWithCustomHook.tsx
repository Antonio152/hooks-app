import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const {
    counter,
    increment,
    decrement,
    reset
  } = useCounter()
  return (
    <div className='text-center col-12'>
        <h1>Counter With Hook: {counter}</h1>
        <hr />
        <button className='btn btn-info text-white' onClick={() => increment()}>+1</button>
        <button className='btn btn-info text-white' onClick={reset}>Reset</button>
        <button className='btn btn-info text-white' onClick={() => decrement()}>-1</button>

    </div>
  )
}
