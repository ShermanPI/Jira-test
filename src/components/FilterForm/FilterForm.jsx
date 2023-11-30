import './style/filterForm.css'
import { useCardContext } from '../../context/cardsContext'
import InputText from '../InputText/InputText'
import SelectField from '../SelectField/SelectField'
import { users } from '../../utilities/mock/users'

export default function FilterForm () {
  const { tags, filterTasksBy } = useCardContext()

  const handleChangeAsignee = (e) => {
    filterTasksBy({ asignee: e.target.value })
  }

  const handleChangeTag = (e) => {
    filterTasksBy({ tag: e.target.value })
  }

  return (
    <form className='filter-form-container'>
      <InputText placeHolder='Search by title' />
      <SelectField title='Asignee' options={users} onChangeHandler={handleChangeAsignee} />
      <SelectField title='Tag' options={tags} onChangeHandler={handleChangeTag} />
    </form>
  )
}
