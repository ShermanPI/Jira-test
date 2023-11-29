import { useEffect } from 'react'

export function useDebounceCotrolledInput ({ queryStatus, time, callbackFn }) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      callbackFn({ title: queryStatus })
    }, time)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [queryStatus])
}
