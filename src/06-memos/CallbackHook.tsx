import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './components/ShowIncrement'

/* USECALLBACK: Debe ser usado con memo, ya que de manera contraria no funciona */

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)
  const incrementFunction = useCallback((value:number) => {
    setCounter((c) => c + value)
  }, [])

  return (
    <div>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFunction} />
    </div>
  )
}
