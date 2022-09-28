import React, { memo } from 'react'
import { SmallProps } from '../types'

// eslint-disable-next-line react/display-name
export const Small = memo(({ value }:SmallProps) => {
  return (
    <small>{value}</small>
  )
})
