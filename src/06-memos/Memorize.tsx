import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './components/Small'

export const Memorize = () => {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter()
  return (
    <div>
        <h1>Counter: <Small value={counter}/></h1>
        <hr />
        <button className='btn btn-info' onClick={() => increment()}>+1</button>
        <button className='btn btn-info' onClick={() => setShow(!show)}>Change Show</button>
    </div>
  )
}
