import { useState, useEffect } from 'react'
import './style/loader.css'

export default function Loader () {
  const [isPageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        isPageLoading &&
          <div className='loader-container' data-testid='loader-container'>
            <div className='loader-gif-container'>
              <img src='/images/loader.gif' alt='' />
            </div>
          </div>
      }
    </>
  )
}
