import { useState } from 'react'

export default function useToggle ({ initialValue = false }) {
  const [toggleState, setToggle] = useState(initialValue)

  const toggle = () => {
    setToggle(!toggleState)
  }

  return [toggleState, toggle]
}
