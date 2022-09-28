import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'
export const useFetch = (url:string) => {
  const [response, setResponse] = useState({
    isLoading: true,
    data: null,
    isError: false
  })

  const getContent = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setResponse({ isLoading: false, data, isError: false })
    } catch (error) {
      setResponse({ isLoading: false, data: null, isError: true })
    }
  }
  useEffect(() => {
    getContent()
  }, [url])
  return { ...response }
}
