import React, { useRef } from 'react'

export const FocusScreen = () => {
  const InputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  /* Referencia controlable hacia un elemento */
  const onFocus = () => {
    InputRef.current.select()
  }
  return (
    <div className='text-center'>
        <h1>Focus Screen</h1>
        <hr />
        <input ref={InputRef} type="text" placeholder='Escriba su nombre' />
        <button className='btn btn-info mt5' onClick={onFocus}>
            Focus button
        </button>
    </div>
  )
}
