import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { Quotes, ErrorQuote, LoadingQuote } from './'

export const MultipleCustomHooks = () => {
  const { increment, decrement, reset, counter } = useCounter(1)
  const { data, isLoading, isError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )

  const {
    0: {
      author = undefined,
      quote = undefined
    } = {}
  } = data || []

  return (
    <div className="text-center">
      <h1>Breaking Bad App</h1>
      {isLoading && <LoadingQuote/>}
      {!isLoading && isError && <ErrorQuote/>}
      {!isLoading && !isError && <Quotes author={author} quote={quote}/>}
      <button className='btn btn-info text-white' onClick={() => decrement()} disabled={isLoading || counter === 1}>Prev Quote</button>
      <button className='btn btn-info text-white' onClick={reset} disabled={isLoading || counter === 1}>Initial Quote</button>
      <button className='btn btn-info text-white' onClick={() => increment()} disabled={isLoading}>Next Quote</button>
    </div>
  )
}
