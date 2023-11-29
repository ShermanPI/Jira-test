import { useState } from 'react'
import { useDebounceCotrolledInput } from './hooks/useDebounceCotrolledInput'
import { useCardContext } from '../../context/cardsContext'

export default function InputText ({ placeHolder }) {
  const { filterTasksBy } = useCardContext()
  const [query, setQuery] = useState('')

  useDebounceCotrolledInput({ queryStatus: query, time: 1000, callbackFn: filterTasksBy })

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <input type='text' name='' id='' value={query} placeholder={placeHolder} onChange={handleChange} />
  )
}
