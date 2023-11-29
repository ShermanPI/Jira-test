import { useCardContext } from '../../context/cardsContext'

export default function SelectField ({ title, inputName }) {
  const { filterTasksBy } = useCardContext()

  const handleChange = (e) => {
    if (inputName === 'asignee') {
      filterTasksBy({ asignee: e.target.value })
    } else {
      filterTasksBy({ tag: e.target.value })
    }
  }

  return (
    <select name={inputName} id='' defaultValue='hey' onChange={handleChange}>
      <option value=''>{title}</option>
      <option value='Jeff Delaney'>Jeff Delaney</option>
      <option value='nota'>nota</option>
      <option value='hola'>hola</option>
      <option value='hola'>hola</option>
    </select>
  )
}
