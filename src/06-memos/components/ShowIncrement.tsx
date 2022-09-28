import React, { memo } from 'react'
import { ShowIncrementProps } from '../types'

// eslint-disable-next-line react/display-name
export const ShowIncrement = memo(({ increment }: ShowIncrementProps) => {
  console.log('render')
  return (
    <button className="btn btn-info" onClick={() => increment(5)}>
      Increment
    </button>
  )
})
