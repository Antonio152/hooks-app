import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'
const heavyStuff = (limit = 100) => {
  for (let i = 0; i < limit; i++) {
    console.log('RENDERIZADO...')
  }
  return `${limit} Done!`
}

export const MemoHook = () => {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter(300)
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <div>
        <h1>Counter: { counter }</h1>
        <hr />
        <h4 className='mt-5 mb-5'>{memorizedValue}</h4>
        <button className='btn btn-info' onClick={() => increment()}>+1</button>
        <button className='btn btn-info' onClick={() => setShow(!show)}>Change Show: {`${show}`}</button>
    </div>
  )
}
