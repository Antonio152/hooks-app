import React, { memo } from 'react'
type HijoProps = {
    vNumber: number,
    increment: (value:number)=> void
}
// eslint-disable-next-line react/display-name
export const Hijo = memo(({ vNumber, increment }:HijoProps) => {
  console.log('Me volvi a generar')
  return (
    <button className='btn btn-info mt-3' onClick={() => increment(vNumber)}>{vNumber}</button>
  )
})
