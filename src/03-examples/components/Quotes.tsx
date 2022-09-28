import React, { useLayoutEffect, useRef, useState } from 'react'
type QuotesProps = {
    author: undefined|string,
    quote: undefined|string
}
export const Quotes = ({ author, quote }:QuotesProps) => {
  const pRef = useRef() as React.RefObject<HTMLParagraphElement>
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })
  useLayoutEffect(() => {
    const size = pRef.current?.getBoundingClientRect()
    setBoxSize({ height: size?.height!, width: size?.width! })
  }, [quote])

  return (
    <div>
        <blockquote className="blockquote text-end">
        <p className="mb-4" >{author}</p>
        <footer className="blockquote-footer" ref={pRef}> {quote} </footer>
      </blockquote>
      <code className='mb-5'>{JSON.stringify(boxSize)}</code>
    </div>
  )
}
